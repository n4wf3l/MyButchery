// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ButcheriesPage from "./pages/ButcheriesPage";
import DeliveryPage from "./pages/DeliveryPage";
import ContactPage from "./pages/ContactPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import AddButcherPage from "./pages/AddButcherPage";
import AuthService from "./services/authService";

const App = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <Router>
      <div>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/butcheries">Butcheries</Link>
          <Link to="/delivery">Delivery</Link>
          <Link to="/contact">Contact</Link>
          {currentUser ? (
            <>
              {currentUser.user.role === "admin" && (
                <>
                  <Link to="/dashboard">Dashboard</Link>
                  <span>Welcome, {currentUser.user.name}</span>
                </>
              )}
              <button onClick={AuthService.logout}>Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/butcheries" element={<ButcheriesPage />} />
          <Route path="/delivery" element={<DeliveryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/addbutchery" element={<AddButcherPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
