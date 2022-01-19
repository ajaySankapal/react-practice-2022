import React, { useState, useEffect } from "react";
//cleanup function:The cleanup is commonly used to cancel all subscriptions made and cancel fetch requests.
// the process of creating instances and DOM nodes corresponding to React components, and inserting them into the DOM, is called mounting.
//clean up function is called before every re-render
const CleanUpFunction = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    console.log("useEffect");
    return () => {
      console.log("clean up function");
      window.removeEventListener("resize", checkSize);
    };
  });
  console.log("render");
  return (
    <>
      <h3>window </h3>
      <h2>{size} px</h2>
    </>
  );
};

export default CleanUpFunction;
