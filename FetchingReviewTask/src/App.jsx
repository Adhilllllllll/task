 import React,{useState,useEffect} from 'react'
 
 function App() {
  const [quotes,setQuotes]=useState([]);

   useEffect(()=>{
     fetch("https://dummyjson.com/quotes")
    .then((res)=>res.json())
    .then((data)=>{
      setQuotes(data.quotes.slice(0,10))
    })
    .catch((error)=>console.error("error:",error))

   },[])
  function  QuotesList({quotes}){
return (
  <div>
    {quotes.map((quote,index)=>(
      <h3 key={index}>{quote.quote}</h3>
    ))}
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