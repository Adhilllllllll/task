// import React, { useEffect, useState } from "react";

// function Useeffect(){
   
    
//      const [value,setValue]=useState(0);
//      const[color,setColor]=useState("white");
//      const [boom,setBoom]=useState(false);
//      useEffect(()=>{
//         setBoom(false)
//          const id=setTimeout(()=>{
//             setBoom(true)
//          },value *1000);
//         return ()=>{
//            clearTimeout(id)
            
//         }
//        },[value,color])  ;
    
//     return (
//         <div>
//             <div>
//             <div style={{background:color}} >
//             <button onClick={()=>{
//                 // setValue(value + 1)
//                 setValue((state)=> {
//                     return state +1
//                 })
//             }}>increment</button>
//             <label>{value}</label>
//             <button onClick={()=>{
//                 // setValue(value -1)
//                  setValue((state)=> {
//                     return state -1
//                 })
//             }}>decrement</button>
//         </div>
        
//         <button onClick={()=>{
//             setColor("red")
//         }}>Red</button>
//          <button onClick={()=>{
//             setColor("blue")
//         }}>Blue</button>
        
//         </div>
//         {
//             boom && value? (
//                 <div className="boom">
//                     <span>
//                         BOOM
//                     </span>
//                     </div>
//             ): null
//         }
//         </div>
//     );
// }

// export default  Useeffect;

import React, { useEffect, useState } from 'react'

 const Useeffect=()=>{
    const [num1,setNum1] = useState(100);
    const [num2,setNum2] = useState(1000)

    useEffect(()=>{
        setNum1(200)
        console.log("from useffect");
    },[num1,num2])

    // console.log("num",num1);
    

 return(
    <div>
        <h1>{num1}</h1>
        <button onClick={()=>setNum1((curr)=>curr +1)}>Add</button>
        <h2>
            {num2}
        </h2>
         <button onClick={()=>setNum2((curr)=>curr +1)}>Add</button>
    </div>
 )
}
export default Useeffect;









  