import React from 'react';
//导入react原生dom,让react可以操作原生dom     后面用React Native下载导入使用
import ReactDOM from 'react-dom';
import App from './App';
//创建div节点并让react可以操作原生dom
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
