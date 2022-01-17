import React, { useState } from "react";
import { data } from "./data";

//in order to romove the particular item from the list we will create some handler with 'id' parameter in it removeItem(id)
//in handler function we pass the id as parameter and the logic behind the function is that we filter out the array, so all the item which do not have the matching id we leave them in the list and the which that have the matching id we want to  remove them
//let newPeople = people.filter((person) => person.id !== id); in this statement we are keeping only those elements in newPeople whose id's are not equal to the id we are clicking

const UseStateArrayExample = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <React.Fragment>
      {people.map((item) => {
        const { id, name } = item;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      <button type="button" onClick={() => setPeople([])}>
        clear all
      </button>
    </React.Fragment>
  );
};

export default UseStateArrayExample;
