import React, { useState } from "react";
import ReduxCounter from "./components/ReduxCounter";
// import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <h1>Hello From App</h1> */}
      <ReduxCounter />
    </div>
  );
};

export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [show, setShow] = useState(false);
//   const handleClick = () => {
//     setShow((prev) => !prev);
//   };

//   const hanldeMouseDown = () => {
//     setShow((prev) => !prev);
//   };

//   return (
//     <div>
//       <input onFocus={handleClick} onMouseEnter={hanldeMouseDown} type="text" />
//       <div style={{ display: show ? "flex" : "none", backgroundColor: "red" }}>
//         <small>Hii</small>
//       </div>
//     </div>
//   );
// };

// export default App;
