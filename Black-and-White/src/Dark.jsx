import React, { useState } from "react";

 function Dark() {
  const [Dark, setIsDark] = useState( );  

  const toggleTheme = () => {
    setIsDark((prevTheme) => !prevTheme);
  };

//   const appStyle = {
//     height: "100vh",
//     backgroundColor: Dark ? "#121212" : "#ffffff",
//     color: Dark ? "#ffffff" : "#000000",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     transition: "all 0.3s ease",
//   };

 

  return (
    <>
    {/* <div style={appStyle}> */}
    <div style={{"backgroundColor":Dark ? "#121212" : "#ffffff",
        "color": Dark?"#ffffff" : "#000000",
        "margin":"0px",
        'padding':"0px",
        "height" : "100vh"
    }}>
      <h1>{Dark ? "Dark Theme" : "Light Theme"}</h1>
      <button onClick={toggleTheme}>Switch Theme</button>
    </div>
    </>
    
  );
}

export default Dark;
