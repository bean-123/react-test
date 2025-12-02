import { Typography } from "@mui/material";

const Footer = ({ count, setCount }) => {
  return (
    <footer className="footer">
      <Typography variant="body1">Copyrights</Typography>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </footer>
  );
};

export default Footer;
