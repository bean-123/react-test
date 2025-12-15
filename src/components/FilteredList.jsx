import { useState } from "react";

const names = ["Alice", "Bob", "Charlie", "David"];

const FilteredList = () => {
  const [query, setQuery] = useState("");
  const filteredNames = names.filter((name) =>
    name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search name here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <ul>
        {filteredNames.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilteredList;
