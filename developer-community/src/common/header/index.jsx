import React, {Component} from 'react'
import {
    HeaderWrapper, Logo, Nav, NavItem, NavSearch,
    Addition, Button
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
                    <NavItem className='right'>Aa</NavItem>
                    <NavSearch></NavSearch>
                </Nav>
                <Addition>
                    <Button className='writting'>Create Post</Button>
                    <Button className='reg'>Sign up</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}