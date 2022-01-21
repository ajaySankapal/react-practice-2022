import React, { useState } from "react";

//short circuit evaluation
//ternary operator
const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  const firstValue = text || "hello world"; //when first condition is true it will return first, if not true it will check for second if that is true then it will return the second
  const secondValue = text && "hello world"; //when first condition is true it will check for second condition if that is also true it will return second condition , if any of the condition is false it will not return anything
  return (
    <div>
      {/* <h4>{firstValue}</h4>
      <h4>value: {secondValue}</h4> */}
      <h3> {text || " hello world"}</h3>
      <button onClick={() => setIsError(!isError)}>toggle error</button>
      {/* {isError && <h3>John Doe</h3>} */}

      {isError ? <h3>John Doe</h3> : <h3>hello world</h3>}
    </div>
  );
};

export default ShortCircuit;
