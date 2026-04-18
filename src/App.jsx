import React, { useState } from "react";
import "./App.css";

const COLORS = ["pink", "green", "blue", "yellow", "red"];

function App() {
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  const [state, setState] = useState(0);
  const [person, setPerson] = useState({
    nama:"bintang",
    age:17})
const [inputValue, setInputValue] = useState("");
  // const onButtonClick = (color) => () => {
  //   setBackgroundColor(color);
  // };
const personHandler = () => { 
setPerson({...person, nama:inputValue, age:person.age + 1})
setState((state)=> state+ 1)
}
  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      <h1>{person.nama}</h1>
      <h2>{person.age}</h2>
      <input type="text" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}} />
      <button onClick={personHandler}>klik ibah nama</button>
      {COLORS.map((color) => (
        <button
          type="button"
          key={color}
          onClick={() => setBackgroundColor(color)}
          className={backgroundColor === color ? "selected" : ""}
        >
          {color}
        </button>
      ))}

      <p>{state}</p>
      <button onClick={()=>{setState((state)=> state + 1 )}}>klik</button>
    </div>
  );
}

export default App;
