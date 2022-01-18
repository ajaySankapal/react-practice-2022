import React, { useEffect, useState } from "react";

//useEffect: everytime think of useEffect think of works outside the component , that work could be changing document title ,signing up for the subscription, could be fetching data, setting up a event listener
//by default useEffect runs after every re-render
//we can not place hooks as far as hooks
//cleanup function is required
//second parameter: if we put [] as second parameter useEffect will only runs on the initial render
// can we put something in the dependency array? well...yes. we want to call useEffect every render when the value will change so we pass value in that array dependency
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    if (value > 1) {
      document.title = `new messages ${value}`;
    }
  }, [value]);
  useEffect(() => {
    console.log("hello world");
  }, []);

  console.log("render component");
  return (
    <div>
      <h3>{value}</h3>
      <button onClick={() => setValue(value + 1)}>click me</button>
    </div>
  );
};

export default UseEffectBasics;
