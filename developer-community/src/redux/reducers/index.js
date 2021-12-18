import { combineReducers } from 'redux-immutable'
import header from './header'

const reducer = combineReducers({
    header: header
})
export default reducer