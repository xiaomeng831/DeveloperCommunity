import React, {Component} from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import {focused, blur} from '../../redux/action'
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch,
    Addition, Button, SearchWrapper
} from './style'


class Header extends Component {

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
                                onFocus={this.props.changeToFocused}
                                onBlur={this.props.changeToBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <i className={this.props.focused ?'icon focused':"icon blur"}>
                            <i className="fas">&#xf002;</i>
                        </i>
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
        focused: state.focused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeToFocused() {
            dispatch(focused)
        },
        changeToBlur(){
            dispatch(blur)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)