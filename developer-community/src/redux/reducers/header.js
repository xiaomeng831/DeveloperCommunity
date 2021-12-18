import { fromJS } from 'immutable'
import { SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST, MOUSE_IN, MOUSE_OUT, CHANGEPAGE } from '../constant'

const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage: 0,
    mouseIn: false
})

const header = (state = defaultState, action) => {
    switch(action.type) {
        case SEARCH_FOCUS:
            return state.set('focused', true)
        case SEARCH_BLUR:
            return state.set('focused', false)
        case CHANGE_LIST:
            console.log(action)
            console.log(action.data)
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            })
        case MOUSE_IN:
            return state.set('mouseIn', true)
        case MOUSE_OUT:
            return state.set('mouseIn', false)
        case CHANGEPAGE:
            return state.set('page', action.page)
        default:
            return state
    }
}
export default header