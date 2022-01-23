import React, { useEffect, useRef } from "react";

//preserves values
//DOES NOT trigger re-render
//target DOM nodes/elements
const UseRefBasics = () => {
  const refContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  return (
    <div style={{ marginTop: "2rem" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            ref={refContainer}
            value={refContainer.value}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: "0.75rem" }}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default UseRefBasics;
