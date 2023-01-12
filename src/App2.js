import { useState } from "react";
import Feedback from "./components/Feedback";

function App() {
  // const { name, age} = props

  const[counter, setCounter] = useState(0)

  // setTimeout(
  //   () => setCounter(counter +1),
  //   1000)

  const handleClick = () => setCounter(counter +1)
  const handleClicked = () => setCounter(counter -1)

  const handleReset = () => setCounter(0)
  
    // function handleClick() {
  //   return setCounter(counter +1)
  // }

  console.log(`rendering ${counter}`)

  return (
    <>
      {/* <h1>Hello {name}, You are {age} years old</h1>  */}
      <h2> {counter} </h2>
      <button onClick={handleClick}> Plus </button>
      <button onClick={handleClicked}> Minus </button>
      <button onClick={handleReset}> Reset </button>
      <Feedback></Feedback>
    </> 
  );
}

export default App;
