import React, { useEffect, useState } from "react";
import "../../src/App.css";
import Card from "../components/Card";
import Counter from "../components/Counter";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import useCounter from "./hooks/useCounter";
import Form from "../components/Form";
import axios from "axios";

function Home() {
  // const [ count, setCount ] = useCounter; // Using custom hook
  const [count, setCount] = useState(0);
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  useEffect(() => {
    axios.get("http://localhost:3001/employees").then((response) => {
      setEmployees(response.data);
    });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/employees/${id}`).then(() => {
      setEmployees(employees.filter((employee) => employee.id !== id));
    });
  };

  const handleClick = () => {
    axios
      .post("http://localhost:3001/employees", {
        id: String(employees.length + 1),
        name: formData.name,
        title: formData.title,
        age: formData.age,
        isFavourite: false,
      })
      .then((response) => {
        setEmployees([...employees, response.data]);
      });
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
                handleDelete={handleDelete}
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
      </div>
    </>
  );
}

export default Home;
