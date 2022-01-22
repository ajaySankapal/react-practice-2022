import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/src/util/";
//in js : const input = document.getElementById('myText')
//const inputValue = input.value
//In React:
//value,onchange:(in the input field. we connect state to the value, and target that state onchange)
const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    e.preventDefault();
    if (firstName && email) {
      const person = { firstName, email };

      setPeople(() => {
        return [...people, person];
      });
    }
    setFirstName("");
    setEmail("");
  };
  return (
    <>
      <article style={{ marginTop: "4rem" }}>
        <form onSubmit={handleChange}>
          <div className="form-group">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="fistName"
              className="form-control"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="fistName"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "1rem" }}
          >
            submit
          </button>
        </form>
        <article>
          <div>
            {people.map((people) => {
              const { firstName, email } = people;
              return (
                <div>
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <h5>{firstName}</h5>
                      </div>
                      <div className="col">
                        <h6>{email}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </article>
      </article>
    </>
  );
};

export default ControlledInputs;
