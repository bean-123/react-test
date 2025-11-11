import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import useCounter from "./hooks/useCounter";
import data from "./data";
import Form from "./components/Form";

function App() {
  // const [ count, setCount ] = useCounter; // Using custom hook
  const [count, setCount] = useState(0);
  const [employees, setEmployees] = useState(data);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  const handleClick = () => {
    setEmployees([
      ...employees,
      {
        id: employees.length + 1,
        name: formData.name, // if we have a form we would do it like formData.name.value
        title: formData.title, // formData.title.value
        age: formData.age, // formData.age.value
        isFavourite: false,
      },
    ]);
  };

  const toggleFavourite = (id) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id && employee.isFavourite === undefined) {
        return { ...employee, isFavourite: false };
      } else if (employee.id === id) {
        return { ...employee, isFavourite: !employee.isFavourite };
      } else {
        return employee;
      }
    });

    setEmployees(updatedEmployees);
  };

  return (
    <>
      <div>
        <Header />
        <div className="container">
          {employees.map((employee) => {
            console.log(employee); //if you want to do console.log or any edits the data you need to put this all in {}
            let age = employee.age;
            age = age + 100;

            return (
              <Card
                key={employee.id}
                // id={employee.id}
                // name={employee.name}
                // title={employee.title}
                // age={age}
                // isFavourite={employee.isFavourite}
                {...employee} // you can use this bc u deconstructed it in Card
                toggleFavourite={toggleFavourite}
              />
            );
          })}
          <Counter count={count} setCount={setCount} />
          <Form
            formData={formData}
            setFormData={setFormData}
            handleClick={handleClick}
          />
        </div>
        <Footer count={count} setCount={setCount} />
      </div>
    </>
  );
}

export default App;
