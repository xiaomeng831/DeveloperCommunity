import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { focused, blur, getList, mouseIn, mouseOut, changePage } from '../../redux/action'
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch,
    Addition, Button, SearchWrapper, SearchInfo,
    SearchInfoTitle, SearchInfoSwitch, SearchInfoItem,
    SearchInfoList, SpinIcon
} from './style'


class Header extends Component {

    getListArea = () => {
        const newList = this.props.list.toJS()
        const pageList = []

        if(newList.length){
            for(let i = (this.props.page - 1) * 10; i < this.props.page * 10; i++){
                pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
            }
        }

        if(this.props.focused || this.props.mouseIn){
            return (<SearchInfo onMouseEnter={this.props.handleMouseIn} onMouseLeave={this.props.handleMouseOut}>
                        <SearchInfoTitle>
                            热门搜索
                            <SearchInfoSwitch onClick={() => this.props.changePage(this.props.page, this.props.totalPage, this.spinIcon)}>
                                <SpinIcon ref={(c) => {this.spinIcon = c}}>
                                    <i className="fas">&#xf2f1;</i>
                                </SpinIcon>
                                &nbsp;换一批
                            </SearchInfoSwitch>
                        </SearchInfoTitle>
                        <SearchInfoList>
                            {pageList}
                        </SearchInfoList>
                    </SearchInfo>
            )
        }   
    }

    render(){
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className='left'>Home</NavItem>
                    <NavItem className='left'>Download App</NavItem>
                    <NavItem className='right'>Log in</NavItem>
                    <NavItem className='right'>
                        <i className="fas">&#xf042;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearch 
                                className={this.props.focused ?'focused':"blur"}
                                onFocus={() => this.props.changeToFocused(this.props.list)}
                                onBlur={this.props.changeToBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ?'icon focused':"icon blur"}>
                            <i className="fas">&#xf002;</i>
                        </i>
                        {this.getListArea()}
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className='writting'>
                        <i className="fas">&#xf303;</i>&nbsp;
                        Create Post
                        </Button>
                    <Button className='reg'>Sign up</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header','focused']),
        list: state.getIn(['header','list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeToFocused(list) {
            (list.size === 0) && dispatch(getList())
            dispatch(focused())
        },
        changeToBlur(){
            dispatch(blur())
        },
        handleMouseIn(){
            dispatch(mouseIn())
        },
        handleMouseOut(){
            dispatch(mouseOut())
        },
        changePage(page, totalPage, spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
            if(originAngle) {
                originAngle = parseInt(originAngle,10)
                originAngle = originAngle + 360
            }else {
                originAngle = 360
            }
            spin.style.transform = `rotate(${originAngle}deg)`
            
            if(page < totalPage){
                dispatch(changePage(page + 1))
            }else{
                dispatch(changePage(1))
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)