import React, { useState, useEffect } from "react";

//based on some conditions we are returning some values
const url = "https://api.github.com/users/QuincyLarson";
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");
  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status < 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((data) => {
        const { login } = data;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error)); //this catch error is just showing the network error. what if we are fetching a user which is not there it will then also respond the network error. to fix we have to handle this separately
  }, []);
  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h2>Error...</h2>
      </div>
    );
  }
  return (
    <div>
      <h2>{user}</h2>
    </div>
  );
};

export default MultipleReturns;
