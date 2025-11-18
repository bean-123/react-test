import { useNavigate } from "react-router";
import styles from "./Card.module.css";

const Card = ({
  name,
  title,
  age,
  isFavourite,
  toggleFavourite,
  id,
  handleDelete,
}) => {
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

export default Card;
