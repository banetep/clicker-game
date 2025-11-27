import { useState, useEffect } from "react";

function App(){
  //Click itself
  const [count, setCount] = useState(0)
  //Autoclick itself
  const [auto, setAuto] = useState(0)
  const autocost = 10;


  //that should be autoclickers
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + auto)
    }, 1000);

  return () => {
    clearInterval(interval);
    };
  }, [auto]);

  const Buy = () => {
    if (count >= autocost) {
      setCount(count => count - autocost)
      setAuto(auto => auto+1)
    } else {
      alert("fuck you")
    }
  };



  //html-shit and BUTTONS
  return (
  <div className="wrapper">
    <div>Count: {count}</div>
    <button onClick ={() => setCount((prevClick) => prevClick + 1)}>CLICK</button>
    <button onClick = {Buy} >BUY</button>
    <div>Autoclickers: {auto}</div>
  </div>
  );
}

export default App;