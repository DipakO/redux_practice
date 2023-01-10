import React, { createContext, useContext, useReducer } from "react";
import { CounterReducer } from "./Reducer";

const Counter = createContext();
const CounterContext = ({ children }) => {
  const initialCount = 1;

  const [state, dispatch] = useReducer(CounterReducer, initialCount);
  return (
    <Counter.Provider value={{ state, dispatch }}>{children}</Counter.Provider>
  );
};

export default CounterContext;
export { Counter };

export const ContextCount = () => {
  return useContext(Counter);
};
