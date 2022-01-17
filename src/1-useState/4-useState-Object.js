import React, { useState } from "react";

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: "Ajay",
    age: 23,
    message: "Hello this is Ajay",
  });
  const handleChange = () => {
    //our goal is to change only the message, in order to change only the message and keep remaining two properties as it is we copy the properties by spread operator and change the desired property
    setPeople({ ...people, message: "welcome you all!!!" });
  };
  return (
    <div>
      <h2>{people.name}</h2>
      <h2>{people.age}</h2>
      <h2>{people.message}</h2>
      <button onClick={handleChange}>change message</button>
    </div>
  );
};

export default UseStateObject;
