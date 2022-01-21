import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/js/src/util/";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h4>show/hide</h4>
      <button className="btn-primary" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </div>
  );
};
const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => setSize(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setSize(window.innerWidth));
    };
  }, []);
  return (
    <div>
      <h2>window</h2>
      <h2>{size}</h2>
    </div>
  );
};

export default ShowHide;
