import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  }

  const handleDecrement = () => {
    setCounter(counter - 1);
  }

  const handleClear = () => {
    setCounter(0);
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" onClick={handleIncrement}>Increment</button>
      <button type="button" onClick={handleDecrement}>Decrement</button>
      <button type="button" onClick={handleClear}>Clear</button>
    </div>
  );
}
