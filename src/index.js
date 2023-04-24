import React from 'react';
// ReactDOM: 专门做渲染相关的包
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// 渲染根组件App 到一个id为root的DOM节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //严格模式节点，useEffect执行机制
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
