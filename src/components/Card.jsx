import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{props.name}</h2>
      <p className={styles.title}>Title: {props.title} </p>
      <p className={styles.age}>Age: {props.age}</p>
    </div>
  );
};

export default Card;
