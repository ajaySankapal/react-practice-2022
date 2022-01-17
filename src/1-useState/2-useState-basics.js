import React, { useState } from "react";

//must use 'use' in the begining
// component name must be uppercase
//must be in the function component body
//cannot call conditionally

const UseStateBasics = () => {
  const [title, setTitle] = useState("random title");
  const handleClick = () => {
    if (title === "random title") {
      setTitle("kuch bhi");
    } else {
      setTitle("random title");
    }
  };
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <button type="button" onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
