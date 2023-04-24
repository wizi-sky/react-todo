// 引入
import "./index.css";
import JsxComponent from "./components/JSX_Test"; // jsx组件引入
import CComponents from "./components/component_Test";
import StateComponent from "./components/state_test";

function App() {
  return (
    <div className="App">
      App
      <h2>一.JSX语法</h2>
      <JsxComponent />
      <h2>二.组件</h2>
      <CComponents />
      <h2>三.状态</h2>
      <StateComponent />
    </div>
  );
}

export default App;
