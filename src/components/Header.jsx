import { Link } from "react-router";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Logo</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/todos">Todos</Link>
      </nav>
    </div>
  );
};

export default Header;
