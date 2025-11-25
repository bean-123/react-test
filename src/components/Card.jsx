import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import styles from "./Card.module.css";

const Card = ({
  // Defining props, but below we are defining them separately which is cleaner
  name,
  title,
  age,
  isFavourite,
  toggleFavourite,
  id,
  handleDelete,
}) => {
  console.log("Card props - ID", id, "Name", name);
  const navigate = useNavigate();
  // if you deconstruct them here, you can just put {...employee} in app
  return (
    <div className={styles.card}>
      <button onClick={() => toggleFavourite(id)}>Toggle Favourite</button>
      <button onClick={() => handleDelete(id)}>Delete</button>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.title}>Title: {title} </p>
      <p className={styles.age}>Age: {age}</p>
      <div className={styles.favourite}>{isFavourite && <span>❤️</span>}</div>
      <button onClick={() => navigate(`/employees/${id}`)}>
        View Employee
      </button>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isFavourite: PropTypes.bool,
  id: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  toggleFavourite: PropTypes.func.isRequired,
};

export default Card;
