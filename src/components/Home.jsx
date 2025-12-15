import React, { useEffect, useState } from "react";
import "../../src/App.css";
import Card from "../components/Card";
import Counter from "../components/Counter";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import useCounter from "./hooks/useCounter";
import Form from "../components/Form";
import axios from "axios";
import { useSearchParams } from "react-router";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton/";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import EmployeesTable from "./EmployeesTable";
import ToggleButton from "./Togglebutton";
import Charactercount from "./Charactercount";

function Home() {
  // const [ count, setCount ] = useCounter; // Using custom hook
  const [count, setCount] = useState(0);
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //common error when handling loading state:
    //setLoading(true)
    axios
      .get("https://react-test-1of0.onrender.com/employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log("Error: ", error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://react-test-1of0.onrender.com/employees/${id}`)
      .then(() => {
        setEmployees(employees.filter((employee) => employee.id !== id));
      });
  };

  const handleClick = () => {
    axios
      .post("https://react-test-1of0.onrender.com/employees", {
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div>
        <Button
          variant="contained"
          color="limeGreen"
          startIcon={<DeleteIcon />}
        >
          Click me im from MUI!
        </Button>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </IconButton>
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
        <EmployeesTable />
      </div>
    </>
  );
}

export default Home;
