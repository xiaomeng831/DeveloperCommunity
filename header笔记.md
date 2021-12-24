## 1. styled-components

1. 安装: yarn add styled-components

2. 全局css样式

   ```js
   /* style.js */
   //引入 createGlobalStyle 
   import {createGlobalStyle} from 'styled-components'
   //创建全局样式组件，并暴露
   export const GlobalStyle = createGlobalStyle`具体样式`
   ```

   ```jsx
   /* App.jsx */
   // 引入GlobalStyle组件，并将其放在所有组件最前面即可
   import {GlobalStyle} from './style'
   class App extends Component {
     render(){
       return	(<div>
           			<GlobalStyle/>
           			<Header/>
         			</div>)
     }
   }
   ```

3. 具体静态组件

   ```js
   /* style.js */
   //引入 styled
   import {styled} from 'styled-components'
   //创建静态组件
   //styled.具体html标签.attrs(html属性)`css样式`
   export const NavSearch = styled.input.attrs(
       {placeholder: 'Search'}
   )`
   	width: 160px;
   	height: 38px;
   `
   ```

   ```jsx
   /* header/index.jsx */
   //引入 NavSearch 静态组件
   import {NavSearch} from './styled'
   //引入后在Header组件中使用
   class Header extends Component {
     render(){
       return <NavSearch/>
     }
   }
   ```

4. 使用背景图片

   ```js
   /* style.js */
   //引入背景图片
   import LogoPic from '../../statics/logo.png'
   //通过 ${} 使用图片
   export const Logo = styled.div.`
   	background:url(${LogoPic});
   `
   ```

5. &用法

   ```js
   /* style.js */
   import {styled} from 'styled-components'
   //&只给选中的内容加样式，不加&则会给选中的内容及其后代加样式
   export const NavSearch = styled.input.attrs(
       {placeholder: 'Search'}
   )`
       width: 160px;
       height: 38px;
       &::placeholder {
           color:#99;
       }
   `
   ```

## 2.Font Awesome

1. 使用方式
   1. 作为react组件使用，需下载相应的包
   2. 下载整个css文件，放到项目中，在index.html引入
   3. 在项目中引入注册的kitcode，放到index.html文件中: https://fontawesome.com/v5.15/how-to-use/on-the-web/using-with/react
2. 注意事项: Font Awesome 和 styled-components 配合使用有冲突，所以改变具体图标的样式时，最后在其外面包一层 i 标签，然后修改外层 i 标签样式

## 3.transition-group 未完成

## 4.react中的状态和方法

1. 状态在组件的类中

2. 操作状态的方法在组件的类中

3. 状态改变的过程:

   标签执行一个方法 --> 该方法是定义在组件中用来改变状态的 --> 组件直接使用自身的state

## 5.react-redux中的状态和方法

1. 状态在reducer中

2. 操作状态的方法在reducer中

3. 状态改变的过程:

   标签执行一个方法 --> 

   该方法是组件在mapDispatchToProps中定义的，可以用来: 1.定义自身的功能 2.用来调用action.js中的方法进行派发，3.派发的同时可能会传递data --> 

   action.js生成具体的action对象 --> 

   reducer接受action对象，根据type和data选择并执行改变状态的方法 --> 

   组件在mapStateToProps方法里获取状态，并通过自身的props使用reducer传过来的状态

## 6.react-redux的使用方法

1. 安装
   1. yarn add redux	安装redux
   2. yarn add react-redux	安装react-redux
   3. yarn add redux-devtools-extension	安装redux开发者工具
   4. yarn add redux-thunk	安装redux-thun，用来使用中间件
   5. yarn add axios	安装axios，用来发送ajax
2. 连接、开发者工具、中间件

```jsx
/* 项目的index.js */
import {Provider} from 'react-redux'
//连接1: 将Provider包在App组件外，定义属性 store={store}
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
```

```jsx
/* header/index.jsx */
import {connect} from 'react-redux'
//连接2: 通过connect方法连接，并且将其暴露
export default connect(mapStateToProps, mapDispatchToProps)(Header)
```

```js
/* redux/stroe.js */
//引入createStore创建store；引入applyMiddleware中间件
import {createStore, applyMiddleware} from 'react-redux'
//引入composeWithDevTools，用来使用开发者工具
import {composeWithDevTools} from 'redux-devtools-extension'
//引入thunk，用来发送异步请求
import thunk from 'redux-thunk'
//连接3: 通过createStore创建一个store，并暴露
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))
export default store
```

3. 使用流程

```js
/* header/index.jsx ----- 获得state，定义自身的方法和派发action的方法 */
//引入action.js中生成action对象的方法
import {changePage} from '../../redux/action'
class Header extends Component{
  render(){ ... }
  //获取reducer里的状态
  //注意当reducer里使用了immutable，则这里取的数据都是immutable类型的，组件可以使用toJS方法将其转换回来
  mapStateToProps = (state) => {
    return {
      list: state.list	//单个reducer时
      list: state.header.list	//多个reducer时
      list: state.get('list')	//使用immutable，且单个reducer时
      list: statel.getIn(['header', 'list'])	//使用immutable，且多个reducer时
    }
  }
  //将方法放到这里用来: 1.定义自身的功能 2.用来调用action.js中的方法进行派发，3.派发的同时可能会传递data
  mapDispatchToProps = (dispatch) => {
    return {
      changeToFocused(list) {
            (list.size === 0) && dispatch(getList())
            dispatch(focused())
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
}
```

```js
/* constants.js ----- 定义type的字符串的常量 */
export const SEARCH_FOCUS = 'search_focus'
export const CHANGE_LIST = 'change_list'
export const CHANGEPAGE = 'change_page'
```

```js
/* action.js ----- 定义生成action的方法和发送异步请求的方法 */
//引入axios发送ajax
import axios from 'axios'
//引入constants.js中的常量
import {SEARCH_FOCUS, CHANGE_LIST, CHANGEPAGE} from './constants'

export const focused = () => ({type:SEARCH_FOCUS})
export const changePage = (page) => ({type:CHANGEPAGE, page})

const changeList =  (data) => ({
    type:CHANGE_LIST,
    data:fromJS(data),	//因为ajax收到的数据不是immutable类型，若项目中使用immutable，则需要fromJS方法来转换
    totalPage:Math.ceil(data.length / 10)})
export const getList = () => {
    return (dispatch) => {
        axios.get('api/header.json').then((res) => {
            dispatch(changeList(res.data.data))
        })
        .catch(()=>{
            console.log('error')
        })
    }
} 
```

```js
/* reducer/index.js ----- reducer出口文件，用来合并所有组件的reducer  */
//引入combineReducers，用来合并各个组件的reducer
//若项目使用immutable，则从'redux-immutable'引入，而不是'redux'
import {combineReducers} from 'redux' 
//引入各个组件的reducer
import header from './header'
const reducer = combineReducers({
	header:header
})
```

```js
/* reducer/header.js ----- 定义操作state的具体方法 */
//若使用immutable，将其引入
import {fromJS} from 'immutable'
//引入constants.js中的常量
import {SEARCH_FOCUS, CHANGE_LIST, CHANGEPAGE} from './constants'

//定义state的默认初始值
const defaultState = {
    focused: false,
    list: [],
    page: 1,
    totalPage: 0
}
const defaultState = fromJS({
    focused: false,
    list: [],
    page: 1,
    totalPage: 0
})
//使用纯函数控制state
const header = (state = defaultState, action) => {
    switch(action.type) {
        case SEARCH_FOCUS:
        		return state.focused = true	//普通方式
        		return {...state, ...{}}	//展开运算符方式
            return state.set('focused', true)	//引入immutable后的方式
        case CHANGE_LIST:
        		return state.list = action.data, state.totalPage = action.totalPage	//普通方式
        		return {...state, ...{list: action.data, totalPage: action.totalPage}}	//展开运算符方式
            return state.merge({	//引入immutable后的方式
                list: action.data,
                totalPage: action.totalPage
            })
        case CHANGEPAGE:
            return state.set('page', action.page)
        default:
            return state
    }
}
export default header

```

## 7.其他知识总结

### 1.组件标签属性中调用方法

核心原则是给属性中传一个没有被调用的函数

1. 无参数

   ```jsx
   onClick={this.函数名}	//不使用redux
   onClick={this.props.函数名}	//使用redux
   ```

2. 有参数

   ```jsx
   //柯里化
   onClick={this.函数名(参数)}
   函数名 = (参数) => {
     return () => {}
   }
   onClick={this.函数名(参数1,参数2)}
   函数名 = (参数1) => {
     return (参数2) => {}
   }
   //多参数
   onClick={() => this.函数名(参数)}
   函数名 = (参数)=>{}
   onClick={(参数1) => this.函数名(参数1，参数2)}
   函数名 = (参数1，参数2)=>{}
   ```

### 2.状态改变样式

style={{background:this.state.xxx ? 'pink':'orange'}}

className={this.state.xxx ? 'a c': 'b c'} 都有c样式

### 3.模拟数据

模拟数据，在public目录下建立api目录，然后在api目录下建立json模拟数据，上线的时候删除就行 （create-react-app底层是个node.js服务器）

### 4.jsx中的for循环

1. 组件标签里不能使用for循环
2. 其他地方可以使用for循环，比如class里的函数中
3. 组件标签可以放到for循环中

### 5.数组和标签组件

1. 组件标签中会自动遍历数组
2. 组件标签放到数组中，比如通过push方法
3. 用map方法遍历时，记得给传key值

### 6.发送ajax优化

如果数据为0，则发送ajax请求，避免多次发送



