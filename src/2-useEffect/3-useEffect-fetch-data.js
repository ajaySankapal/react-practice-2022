import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";
//we fetched the data of 30 users . 1.now we want to display this users by passing this users in setUsers inplace of empty array. 2.
const UseEffectFetch = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    //the above code is correct but there is a different problem. what is the problem? we have useEffect it runs after every re-render and what does useState do is that it preserve the prev state and triggers the re-render
    // we are invoking getUsers in useEffect. in which we are setting Users and then we are calling useEffect and it invokes getUsers, in getUsers we are setting users ....it is like infinite loop.it will may crash the browser. in order to avoid these we have to pass empty array dependency as second arguements
    console.log(users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>github users</h3>
      <ul>
        {users.map((user) => {
          const { id, login, avatar_url } = user;
          return (
            <li key={id}>
              <h4>{login}</h4>
              <img
                style={{ width: "10%", borderRadius: "50% " }}
                src={avatar_url}
                alt=""
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetch;
