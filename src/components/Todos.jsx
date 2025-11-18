import axios from "axios";
import styles from "./Todos.module.css";
import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const [todoRes, usersRes] = await Promise.all([
          axios.get("https://jsonplaceholder.typicode.com/todos"),
          axios.get("https://jsonplaceholder.typicode.com/users"),
        ]);

        setTodos(todoRes.data);
        setUsers(usersRes.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => {
          const user = users.find((u) => u.id === todo.userId);
          return (
            <li key={todo.id}>
              <strong>{todo.title}</strong> -{" "}
              <span>{user ? user.name : "Unknown"}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
