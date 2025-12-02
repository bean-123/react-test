import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
import { Card as MUICard, Button, Typography } from "@mui/material";
import CustomButton from "./CustomButton";

const CardComponent = ({
  // Defining props, but below we are defining them separately which is cleaner
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
    <MUICard className={styles.card}>
      {/* Buttons */}
      <CustomButton variant="contained" onClick={() => toggleFavourite(id)}>
        Toggle Favourite
      </CustomButton>
      <Button variant="contained" onClick={() => handleDelete(id)}>
        Delete
      </Button>

      {/* Employee info */}
      <Typography variant="h6" className={styles.name}>
        {name}
      </Typography>
      <Typography className={styles.title}>Title: {title}</Typography>
      <Typography className={styles.age}>Age: {age}</Typography>
      <div className={styles.favourite}>{isFavourite && <span>❤️</span>}</div>

      {/* Navigation button */}
      <Button variant="contained" onClick={() => navigate(`/employees/${id}`)}>
        View Employee
      </Button>
    </MUICard>
  );
};

// PropTypes for type checking
CardComponent.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isFavourite: PropTypes.bool,
  id: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
  toggleFavourite: PropTypes.func.isRequired,
};

export default CardComponent;
