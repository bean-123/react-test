import { useState } from "react";

const Togglebutton = () => {
  const [hide, setHide] = useState(false);
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type={hide ? "password" : "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button onClick={() => setHide(!hide)}>{hide ? "Show" : "Hide"}</button>
    </div>
  );
};

export default Togglebutton;
