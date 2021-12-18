import axios from 'axios'
import { fromJS } from 'immutable'
import {SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST, MOUSE_IN, MOUSE_OUT, CHANGEPAGE} from './constant'

export const focused = () => ({type:SEARCH_FOCUS})
export const blur =  () => ({type:SEARCH_BLUR})
export const mouseIn = () => ({type:MOUSE_IN})
export const mouseOut = () => ({type:MOUSE_OUT})
export const changePage = (page) => ({type:CHANGEPAGE, page})

const changeList =  (data) => ({
    type:CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length / 10)})
export const getList = () => {
    return (dispatch) => {
        axios.get('api/header.json').then((res) => {
            console.log(res)
            console.log(res.data)
            console.log(res.data.data)
            dispatch(changeList(res.data.data))
        })
        .catch(()=>{
            console.log('error')
        })
    }
} 