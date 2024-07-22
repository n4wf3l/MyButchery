import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Welcome to My Butchery</h1>
      <a href="/register">Register</a>
    </div>
  );
};

export default App;
