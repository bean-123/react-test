import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import useCounter from "./hooks/useCounter";
import data from "./data";

function App() {
  // const [ count, setCount ] = useCounter; // Using custom hook
  const [count, setCount] = useState(0);
  const [employees, setEmployees] = useState(data);

  const handleClick = () => {
    setEmployees([
      ...employees,
      {
        id: employees.length + 1,
        name: "John", // if we have a form we would do it like formData.name.value
        title: "Developer", // formData.title.value
        age: 66, // formData.age.value
      },
    ]);
  };

  return (
    <>
      <div>
        <Header />
        <div className="container">
          <button onClick={handleClick}>Add employee</button>
          {employees.map((employee) => {
            console.log(employee); //if you want to do console.log or any edits the data you need to put this all in {}
            let age = employee.age;
            age = age + 100;

            return (
              <Card
                key={employee.id}
                name={employee.name}
                title={employee.title}
                age={age}
              />
            );
          })}
          <Counter count={count} setCount={setCount} />
        </div>
        <Footer count={count} setCount={setCount} />
      </div>
    </>
  );
}

export default App;
