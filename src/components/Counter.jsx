import React from "react";
import { ContextCount } from "../context/CounterContext";

const Count = () => {
  const { state, dispatch } = ContextCount();
  return (
    <div>
      <button onClick={() => dispatch({ type: "INCR" })}>INCR</button>
      <h3>Count IS : {state}</h3>
      <button onClick={() => dispatch({ type: "DECR" })}>DECR</button>
    </div>
  );
};

export default Count;

// const arr = ["dipak", "vikas", "dipak", "dipak", "vikas", "feroz"];
// const count = {};
// arr.forEach((element) => {
//   count[element] = (count[element] || 0) + 1;
// });
// // 👇️ {one: 3, two: 2, three: 1}
// console.log(count);
