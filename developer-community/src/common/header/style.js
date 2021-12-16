import styled from 'styled-components'
import LogoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs(
    {href:'/'}
)`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100px;
    height: 56px;
    background:url(${LogoPic});
    background-size: contain;
`
export const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 70px;
    box-sizing: border-box;
    margin 0 auto;
`
export const NavItem = styled.div`
    Line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`
export const NavSearch = styled.input.attrs(
    {placeholder: 'Search'}
)`
    width: 160px;
    height: 38px;
    padding: 0 40px 0 20px;
    margin-top: 9px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 15px;
    vertical-align: middle;
    &::placeholder {
        color:#99;
    }
    &.focused {
        width: 240px;
    }
    &.blur {
        width: 160px;
    }
    &.slide-enter {
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width: 240px
    }
    &.slide-exit{
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`
export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 56px;
`
export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color:#fff;
        background: #ec6149;
    }
`

export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .icon {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        color: #969696;
        &.focused {
            color: #ec6149;
        }
    }
    
`