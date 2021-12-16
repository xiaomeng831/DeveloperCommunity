import {SEARCH_FOCUS, SEARCH_BLUR} from './constant'

const defaultState = {
    focused: false
}

const reducer = (state = defaultState, action) => {
    if( action.type === SEARCH_FOCUS){
        return {focused: true}
    }
    if( action.type === SEARCH_BLUR ){
        return {focused: false}
    }
    return state
}

export default reducer