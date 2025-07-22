import React,{useState} from 'react'
function BlackAndWhite() {
  const [dark, setDark] = useState(false);
  const handleColor = () => {
    setDark((prevTheme) => !prevTheme);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: dark ? "#000000" : "#ffffff",
          color: dark ? "#ffffff" : "#000000",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          
        }}>
      
        <h1>{dark ? "dark theme" : "light theme"}</h1>
        <button onClick={handleColor}>Switch theme</button>
      </div>
    </>
  );
}
export default BlackAndWhite;