import React from "react";

// 定义函数式组件
const FunComponent = () => {
  // 定义事件
  const clickHandler1 = (e) => {
    console.log("函数组件事件1触发!");
    console.log(e, "事件触发对象");
  };
  const clickHandler2 = (id) => {
    console.log("函数组件事件2触发!");
    console.log(id);
  };

  return (
    <>
      <div>我是函数式组件</div>
      {/* 绑定事件 onClick */}
      {/* on + 事件名称 = { 事件处理程序 }  */}
      <button onClick={clickHandler1}>函数组件事件1</button>
      {/* 
        // 如何获取额外的参数？
        // onClick={ onDel } -> onClick={ () => onDel(id) }
        // 注意: 一定不要在模板中写出函数调用的代码 onClick = { onDel(id) }  bad!!!!!!
       */}
      <button onClick={(e) => clickHandler2(555)}>函数组件事件2</button>
    </>
  );
};

// 定义类组件
class ClassComponent extends React.Component {
  // 类组件中的事件绑定
  // 整体的套路都是一致的 和函数组件没有太多不同
  // 唯一需要注意的 因为处于class 类环境下 所以定义事件回调函数 以及 绑定它写法上有不同
  // 定义的时候: class Fields语法
  // 使用的时候: 需要借助this关键词获取
  // 注意事项: 之所以要采取class Fields写法是为了保证this的指向正确 永远指向当前的组件实例

  // 定义类上的方法
  clickFun1() {
    // 这里的this 不指向当前的组件实例对象  undefined 存在this丢失问题
    console.log(this);
  }
  clickFun2 = () => {
    // 箭头函数的this指向当前的类的实例
    console.log(this);
  };
  clickFun3 = (id) => {
    // 类的事件传参
    console.log(id);
  };

  render() {
    return (
      <>
        <div>我是类组件</div>
        <button onClick={this.clickFun1}>函数组件事件1</button>
        <button onClick={this.clickFun2}>函数组件事件2</button>
        <button onClick={(e) => this.clickFun3(33333)}>函数组件事件3</button>
      </>
    );
  }
}

// 导出组件
const CComponent = () => {
  return (
    <>
      <p>1. 函数式组件</p>
      <FunComponent></FunComponent>
      <p>2. 类组件</p>
      <ClassComponent></ClassComponent>
    </>
  );
};

export default CComponent;
