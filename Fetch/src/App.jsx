// 
import React, { useEffect, useState } from 'react';

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() =>{
    fetch('https://dummyjson.com/quotes')
      .then(res => res.json())
      .then(data => {
        setQuotes(data.quotes.slice(0,10));  
        console.log(data.quotes.slice(0,10));
        })
      .catch(error => console.error("Error fetching quotes:", error));
  }, []);
  
  return (
    <div style={{ padding: '20px' }}>
      {quotes.map((quoteObj, index) => (
        <h1 key={index}>{quoteObj.quote}</h1>
      ))}
    </div>
  );
}

export default App;
