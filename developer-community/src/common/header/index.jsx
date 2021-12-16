import React, {Component} from 'react'
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch,
    Addition, Button, SearchWrapper
} from './style'

export default class Header extends Component {
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
                        <NavSearch></NavSearch>
                        <i className="icon"><i className="fas">&#xf002;</i></i>
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