import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  //complex counter
  const [counter, setCounter] = useState(0);
  const complexIncrease = () => {
    setTimeout(() => {
      //here what is happening is we are click the button multiple times but all this three times it is refering to the counter value 0; it is not keeping the track of the state in between our clicking ; to fix this we will set a function which will take the counter's prevState as parameter and increase it one all the time we click on the b  utton
      //   setCounter(counter + 1);
      setCounter((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section>
        <h3>Regular Counter</h3>
        <h2>{value}</h2>
        <button onClick={() => setValue(value + 1)}>+</button>
        <button onClick={() => setValue(0)}>reset</button>
        <button onClick={() => setValue(value - 1)}>-</button>
      </section>
      <section>
        {/* more complex counter */}
        <h3 style={{ margin: "4rem 0" }}>more complex counter example</h3>
        <h2>{counter}</h2>
        <button onClick={complexIncrease}>increase later</button>
      </section>
    </>
  );
};

export default UseStateCounter;
