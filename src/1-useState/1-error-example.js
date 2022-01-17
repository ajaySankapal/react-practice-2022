import React from "react";
import { useState } from "react";
const ErrorExample = () => {
  let title = "random title";

  const handleClick = () => {
    title = "hello people";
    console.log(title);
  };
  return (
    <>
      <h3>{title}</h3>
      <button type="button" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default ErrorExample;
