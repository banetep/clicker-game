import { useState, useEffect } from "react";

function App(){
  //Click itself
  const [count, setCount] = useState(0)
  //Autoclick itself
  const [auto, setAuto] = useState(0)
  const [multiplier, setMultiplier] = useState(0)
  const autocost = 10;
  const multipliercost = 25;


  //that should be autoclickers
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + auto)
    }, 1000);

  return () => {
    clearInterval(interval);
    };
  }, [auto]);

  //Buying operation, fuck you javascript
  const BuyAutoClicker = () => {
    if (count >= autocost) {
      setCount(count => count - autocost)
      setAuto(auto => auto+1)
    } else {
      alert("fuck you")
    }
  };

  const BuyClickMultiplier = () => {
    if (count >= multipliercost) {
      setCount(count => count - multipliercost)
      setMultiplier(multiplier => multiplier+1)
    } else {
      alert("didnt you understand what i said last time?")
    }
  }

  const ButtonSoundEffect = new Audio("fart.mp3");

  //html-shit and BUTTONS
  return (
  <div className="wrapper">
    <div>Count: {count}</div>
    <button onClick ={() => {
      setCount((prevClick) => prevClick + (1 + multiplier))
      ButtonSoundEffect.play()
      }}>CLICK</button>
    <hr />
    <button onClick = {BuyAutoClicker} >Buy Autoclicker:{autocost}</button>
    <button onClick = {BuyClickMultiplier}>Buy Multiplier:{multipliercost}</button>
    <div>Autoclickers: {auto}</div>
    <div>Multiplier: {multiplier}</div>
    <img src="monkethink.jpg" alt="Monke"></img>
  </div>
  );
}
//export to index.js and another files
export default App;