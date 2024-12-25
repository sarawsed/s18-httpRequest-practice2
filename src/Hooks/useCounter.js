import { useState } from "react";

const useCounter = (initialValue) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((previousValue) => previousValue + 1);
  const decrement = () => setCount((previousValue) => previousValue - 1);
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};

export default useCounter;
