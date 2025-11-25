import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./SingleEmployee.module.css";
import useAxios from "../hooks/useAxios";

const SingleEmployee = () => {
  const { id } = useParams();
  console.log("ID: ", id);
  const [employee, setEmployee] = useState(null);
  console.log("Employee: ", employee);
  const [isLoading, setIsLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: employee?.name || "",
    title: employee?.title || "",
    age: employee?.age || "",
  });

  const url = `http://localhost:3002/employees/${id}`;
  const { data, loading, error } = useAxios(url);

  const handleChange = (e) => {
    setFormData((prevState) => {
      // Only changin the spesific one and keeping others as they are
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    axios
      .put(`http://localhost:3002/employees/${id}`, formData) // .put edits the info
      .then((response) => {
        setEmployee(response.data); // If you dont have this, it wont update it untill u refresh the page !!!!!
        setIsEditing(false);
      })
      // Catch and Finally are no NEEDED, but its good
      .catch((error) => {
        console.log("Error: ", error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (data) {
      setEmployee(data);
      setFormData({
        name: data.name,
        title: data.title,
        age: data.age,
      });
    }
  }, [id, data, loading]);

  if (loading || isLoading) {
    return <div>Loading...</div>;
  }

  // Adding conditional rendering
  if (isEditing) {
    return (
      <div>
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
          />
        </form>
        <button onClick={handleSave}>Save</button>
        <button onClick={toggleEdit}>Cancel</button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h3>Employee Details</h3>
      <p>Name: {employee?.name}</p>
      <p>Title: {employee?.title}</p>
      <p>Age: {employee?.age}</p>
      <p>Is Favourite: {employee?.isFavourite ? "Yes" : "No"}</p>
      <button onClick={toggleEdit}>Edit</button>
    </div>
  );
};

export default SingleEmployee;
