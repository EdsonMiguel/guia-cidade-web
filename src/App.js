import React from "react";
import "./styles.css";
import Routes from "./routes";
import Header from "./components/Header/Index";

const App = () => (
  <div>
    <Header title="Guia Cidade" />
    <Routes />
  </div>
);
export default App;
