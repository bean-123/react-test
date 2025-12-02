import { Button } from "@mui/material";

const CustomButton = ({ ...props }) => {
  return (
    <Button
      variant="outlined"
      {...props}
      sx={{ margin: "5px", backgroundColor: "pink" }}
    />
  );
};

export default CustomButton;
