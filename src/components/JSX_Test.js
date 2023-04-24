// 数据列表
const list = [
  {
    id: 1,
    name: "React",
  },
  {
    id: 2,
    name: "Vue",
  },
  {
    id: 3,
    name: "Angular",
  },
];

// 样式obj
let styleObj = {
  color: "green",
  background: "skyblue",
};

function Jsx() {
  return (
    <div className="Jsx">
      Jsx
      {/* React之中JSX语法的使用 */}
      <h3>1.插值语法</h3>
      <p>{true ? "1" : "2"}</p>
      <h3>2.列表渲染</h3>
      <div>
        {list.map((item) => (
          // 绑定key
          <p key={item.id}>
            {item.id}:{item.name}
          </p>
        ))}
      </div>
      <h3>3.条件渲染</h3>
      <div>{true ? <span>真</span> : <span>假</span>}</div>
      <h3>4.行内样式</h3>
      <div style={{ color: "red", background: "yellow" }}>行内</div>
      <div style={styleObj}>样式</div>
      <h3>5.类名样式</h3>
      {
        // 使用className定义类名
      }
      <div className="class-test">类名1</div>
      <div className={true ? "class-test1" : ""}>类名2</div>
      <div className={`class-test ${true ? "class-test1" : ""} `}>类名3</div>
    </div>
  );
}

export default Jsx;
