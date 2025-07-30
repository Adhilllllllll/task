 import React,{useState,useEffect} from 'react'
 
 function App() {
  const [quotes,setQuotes]=useState([]);

   useEffect(()=>{
     fetch("http://localhost:3001/products")
    .then((res)=>res.json())
    .then((data)=>{
      setQuotes(data.products)
    })
    .catch((error)=>console.error("error:",error))

   },[])
  function  QuotesList({quotes}){
return (
  <div>
    {quotes}
  </div>
);
}


return(
  <div>
    <QuotesList quotes={quotes} />
  </div>
 
)
 }
 
 export default App;