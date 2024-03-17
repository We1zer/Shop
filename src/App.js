import React from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "./ProductCard";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Routes,
} from "react-router-dom";
import "./Site.css";
import Details from "./Details";
import Login from "./Login";
import Register from "./Register";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route Component={Layout}>
        <Route path="/" Component={ProductCard} />
        <Route path="/Home" Component={ProductCard} />
        <Route path="/Login" Component={Login} />
        <Route path="/Register" Component={Register} />
        <Route path="/Details" Component={Details} />
      </Route>
    </Routes>
  );
}

export default App;
