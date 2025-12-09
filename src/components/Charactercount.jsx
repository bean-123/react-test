import { useState } from "react";

const Charactercount = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      {value.length > 20 ? (
        <p style={{ color: "red" }}>
          You typed {value.length} characters, max is 20
        </p>
      ) : (
        <p>You typed {value.length} characters</p>
      )}
    </div>
  );
};

export default Charactercount;
