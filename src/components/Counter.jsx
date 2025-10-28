const Counter = ({ count, setCount }) => {
  // const handleColor = () => {
  //   if (count === 0) {
  //     return "grey";
  //   } else if (count > 0) {
  //     return "green";
  //   } else if (count < 0) {
  //     return "red";
  //   }
  // };

  const handleColor = () => {
    switch (true) {
      case count === 0:
        return "white";
      case count > 0:
        return "yellow";
      case count < 0:
        return "red";
      default:
        return "white";
    }
  };

  return (
    <div>
      {/* <div style={{ color: count > 0 ? "green" : "red" }}>{count}</div> */}
      <div style={{ color: handleColor() }}>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
};

export default Counter;
