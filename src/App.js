import React from "react";
import Setup from "./2-useEffect/1-useEffect-basics";

//useEffect: everytime think of useEffect think of works outside the component , that work could be changing document title ,signing up for the subscription, could be fetching data, setting up a event listener
//by default useEffect runs after every re-render
function App() {
  return (
    <div>
      <Setup />
    </div>
  );
}

export default App;
