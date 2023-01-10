import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/CounterSlice";
const ReduxCounter = () => {
  const Count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>This Counter is Created using Redux </h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <h1>{Count}</h1>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default ReduxCounter;
