import React, { Component } from "react";

export default class StateTest extends Component {
  // 初始化状态
  // react的状态不可变
  // 概念：不要直接修改状态的值，而是基于当前状态创建新的状态值
  state = {
    count: 0,
    message: "Hello",
  };

  // 定义添加事件
  addCount = () => {
    //  注：不要直接修改state中的值，必须通过setState方法进行修改
    this.setState({
      count: this.state.count + 1,
    });
  };

  // 表单控件
  onInput = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div>State</div>
        {/* 1. class通过this访问state之中的数 */}
        <div>{this.state.count}</div>
        {/* 2. 修改state之中count数值 */}
        <button onClick={this.addCount}>点击</button>
        {/* 3. 表单的处理 */}
        {/* 3.1 受控表单 ==> 双向绑定 */}
        <input value={this.state.message} onChange={(e) => this.onInput(e)} />
        {/* 3.2 不受控表单 ==> 非双向绑定 */}
      </>
    );
  }
}
