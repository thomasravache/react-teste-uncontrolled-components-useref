import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const teste = useRef("");
  const [testeState, setTesteState] = useState("");

  const getInputValue = () => {
    console.log(teste.current.value);
    setTesteState(teste.current.value);
  };

  const getInputOnEnter = (e) => {
    if (e.key === "Enter") {
      console.log(teste.current.value);
      setTesteState(teste.current.value);
    }
  };

  return (
    <div className="App">
      <h2>Input</h2>
      <input type="text" ref={teste} onKeyPress={getInputOnEnter} />
      <button onClick={getInputValue} onKeyPress={getInputOnEnter}>
        teste
      </button>
      <p>{testeState}</p>
    </div>
  );
}
