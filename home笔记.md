1.安装路由
    yarn add react-router-dom
    
2.img的src属性
但在jsx文件中，不支持直接在标签内写图片的路径
import 方法
import imgURL from './../images/photo.png';
<img src={imgURL } />
require 方法
<img src={require('./../images/photo.png')} />
当需要实现动态加载图片时，我们往往会在require中引入一个变量
const iconUrl = require('~/shared/assets/image/icon-document-tip-108-108.png')
<img className="icon" src={iconUrl} alt="" />