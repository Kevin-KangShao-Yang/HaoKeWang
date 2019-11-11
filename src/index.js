import React from 'react';
//导入react原生dom,让react可以操作原生dom     后面用React Native下载导入使用
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 导入字体文件
import './assets/fonts/iconfont.css'

// 最后导入我们自己的样式文件
import './index.css'

//将根组件渲染到id为root 的div静态页面中
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//用于离线缓存
serviceWorker.unregister();
