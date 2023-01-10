export const CounterReducer = (state, action) => {
  switch (action.type) {
    case "INCR":
      return state + 1;
    case "DECR":
      return state - 1;
    default:
      return state;
  }
};
