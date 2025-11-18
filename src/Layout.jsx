import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxHeight: "100%",
        boxSizing: "border-box",
      }}
    >
      <Header />
      <div style={{ flexGrow: "1", boxSizing: "border-box" }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
