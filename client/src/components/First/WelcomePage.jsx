import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <h1 className="title">Welcome to EngineEx</h1>
      <p className="subtitle">Your partner in eco-friendly engine upgrades</p>
      <div className="button-group">
        <button className="btn" onClick={() => navigate("/home")}>
          Explore &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;
