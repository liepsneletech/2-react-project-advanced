import React, { useState } from "react";

const UseStateBasics = () => {
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const [text, setText] = useState("random title");
  const handleClick = () => {
    if (text === "random text") {
      setText("hello world");
    } else {
      setText("random text");
    }
  };
  return (
    <>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default UseStateBasics;
