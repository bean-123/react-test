const Footer = ({ count, setCount }) => {
  return (
    <footer className="footer">
      <p>Copyrights</p>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </footer>
  );
};

export default Footer;
