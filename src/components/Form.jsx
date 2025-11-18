import styles from "./Form.module.css";

function Form({ formData, setFormData, handleClick }) {
  //   const [formData, setFormData] = useState({
  //     name: "",
  //     title: "",
  //     age: "",
  //   }); // REFACTORING THIS^ AND MOVING IT TO APP.JSX

  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value }; // ...formData to ...prevState (it takes previous data)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();
    setFormData({ age: "", name: "", title: "" });
  };

  return (
    <div className={styles.formContainer}>
      <h3>New Employee</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="age">Age:</label>
        <input
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <button type="submit">Add Employee</button>{" "}
        {/* You could use just a button w/o a submit type, <button type="button" onClick={hadleClick}>Add employee</button> */}
      </form>
      <p>Your first name is: {formData.name}</p>
      <p>Your title is: {formData.title}</p>
      <p>Your age is: {formData.age}</p>
    </div>
  );
}
export default Form;
