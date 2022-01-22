import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/src/util/";
//well now..! what if we have to include multiple input fields in our forms. so do we need to maintain multiple states for that multiple input fields? you can. but we have this functionality to create only one state and target that input fields in that state only by passing an object as its initial state
const MultipleInputs = () => {
  //   const [firstName, setFirstName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [age, setAge] = useState("");
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (person.firstName && person.email && person.age) {
      const newPerson = { ...person, id: new Date().getTime.toString() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
    }
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
              name="firstName"
              className="form-control"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              id="email"
              name="email"
              className="form-control"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age : </label>
            <input
              type="number"
              id="age"
              name="age"
              className="form-control"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ marginTop: "1rem" }}
            onClick={handleSubmit}
          >
            submit
          </button>
        </form>
        <article>
          <div>
            {people.map((people) => {
              const { firstName, email, id, age } = people;
              return (
                <div>
                  <div className="container" style={{ marginTop: "3rem" }}>
                    <div className="row">
                      <div className="col" key={id}>
                        <h5>{firstName}</h5>
                      </div>
                      <div className="col">
                        <h6>{age}</h6>
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

export default MultipleInputs;
