import { useState } from "react";

const Child = ({ count, onIncrement }) => {
  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};

const Parent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <Child count={count} onIncrement={increment} />
    </div>
  );
};

export default Parent;
