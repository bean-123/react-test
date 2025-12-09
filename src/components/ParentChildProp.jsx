import { useState } from "react";

const Child = ({ count, onInrement }) => {
  return (
    <div>
      <p>Current count: {count}</p>
      <button onClick={onInrement}>Increment</button>
    </div>
  );
};

const Parent = () => {
  const [count, setCount] = useState(0);

  return <div></div>;
};

export default Parent;
