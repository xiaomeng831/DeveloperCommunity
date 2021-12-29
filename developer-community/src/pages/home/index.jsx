import React, {Component} from 'react'
import {HomeWrapper, HomeLeft, HomeRight} from './style'
import PIC from '../../statics/home2.jpg'
import List from './components/List'
import Recommend from './components/Recommend'
import Topic from './components/Topic'
import Writer from './components/Writer'


class Home extends Component{
    render(){
        return  <HomeWrapper>
                    <HomeLeft>
                        <img className='banner-img' src={PIC} alt='There are some errors about loading img'></img>
                        <Topic></Topic>
                        <List></List>
                    </HomeLeft>
                    <HomeRight>
                        <Recommend></Recommend>
                        <Writer></Writer>
                    </HomeRight>
                </HomeWrapper>
    }
}   

export default Home