// import React, { useState } from "react";
// import ReactCardFlip from "react-card-flip";
// import "./App.css";

// function App() {
//   const [flip, setFlip] = useState(false);
//   const [show, setShow] = useState(false);
//   return (
//     <ReactCardFlip isFlipped={flip} flipDirection="vertical">
//       <div
//         className="FirstPage"
//         style={{
//           width: "300px",
//           height: "200px",
//           background: "#d7fbda",
//           fontSize: "40px",
//           color: "green",
//           margin: "20px",
//           borderRadius: "4px",
//           textAlign: "center",
//           padding: "20px",
//         }}
//       >
//         Welcome to FrontPage.
//         <br />
//         <br />
//         <h1
//           onClick={() => {
//             console.log("Hii");
//           }}
//         >
//           Hii
//         </h1>
//         <button
//           style={{
//             width: "150px",
//             padding: "10px",
//             fontSize: "20px",
//             background: "#f5d9fa",
//             fontWeight: "bold",
//             borderRadius: "5px",
//           }}
//           onClick={() => setFlip(!flip)}
//         >
//           Flip
//         </button>
//       </div>

//       <div
//         style={{
//           width: "300px",
//           height: "200px",
//           background: "#fbd7f8",
//           fontSize: "40px",
//           color: "blue",
//           margin: "20px",
//           borderRadius: "4px",
//           textAlign: "center",
//           padding: "20px",
//         }}
//       >
//         Comes To Back Page
//         <br />
//         <button
//           style={{
//             width: "150px",
//             padding: "10px",
//             fontSize: "20px",
//             background: "#f5d9fa",
//             fontWeight: "bold",
//             borderRadius: "5px",
//           }}
//           onClick={() => setFlip(!flip)}
//         >
//           Flip
//         </button>
//       </div>
//     </ReactCardFlip>
//   );
// }

// export default App;
