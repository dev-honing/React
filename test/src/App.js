// src/App.js
import { useState } from "react";

const App = () => {
  let [title, setTitle] = useState(["1. 글 제목은 title", "2. title은 h1에 쓴다.", "3. 배열은 멋진 자료형이다."]);
  return (
    <div className="App">
      <h1>{ title[0] }</h1>
      <h1>{ title[1] }</h1>
      <h1>{ title[2] }</h1>
    </div>
  );
};
export default App;
