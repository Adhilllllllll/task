import React,{useState} from 'react';


 const  Usestate =()=> {
     const [num,setNum] = useState(1);//useState used 
    // let x=1;


    const handleAdd=()=>{
        // x=x+1;//x++;
       //  console.log("x",x);
        setNum((currValue)=>{
            return currValue +1 ;
        }); 
    }
    // console.log(num);
    

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={handleAdd}>Add</button>
        </div>
    )
 }
export default Usestate;

//
// import React, { useState } from "react";

// export default function App() {
//   return  (
      
//        <InputForm/>
//   )
// }
// function InputForm() {
//   const [name, setName] = useState("");
//   const [num, setNum] = useState(1);
//   const [color, setColor] = useState("white");

//   return (
//     <div style={{ background: color, padding: "20px" }}>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <p>Your Name:{name}</p>

//       <h1>{num}</h1>
//       <button onClick={() => {num < 5 && setNum((n) => n + 1)}}>Add</button>
//       <h1>{color}</h1>
//       <button onClick={() => setColor("red")}>Red</button>
//       <button onClick={() => setColor("blue")}>Blue</button>
//     </div>
//   );
// }

// import React, { useState,useEffect,useRef } from "react";

// export default function App() {
//   return  (
      
//        <InputForm/>
//   )
// }
// function InputForm() {
//   const [name, setName] = useState("");
//   const [num, setNum] = useState(1);
 
    
//   const [color, setColor] = useState(" ");
    

//   return (
//     <div style={{ background: name, padding: "20px" }}>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) =>  setName(e.target.value)}
//       />
//       <p>Your Name:{color}</p>

//       <h1>{num}</h1>
//       <button onClick={() => {num < 15 && setNum((n) => n + 2)}}>increment</button>
//           <button onClick={() =>  setNum((n) => num-3>0 ?  setNum( n-3) : setNum(0))}>decrement</button>
//       <h1>{color}</h1>  
//       <button onClick={() => setColor("red")}>Red</button>
//       <button onClick={() => setColor("blue")}>Blue</button>
//     </div>
//   );
// }


