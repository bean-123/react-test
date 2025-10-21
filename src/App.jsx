import React from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <div className="container">
          <Card name="Maria" title="CEO" age="29" />
          <Card name="Kati" title="Developer" age="25" />
          <Card name="Karin" title="Designer" age="45" />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
