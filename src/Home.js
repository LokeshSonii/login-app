import React, { useState } from "react";
import Login from "./Login";
import Signup from "./Signup";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [displayLogin, setDisplayLogin] = useState(false);
  const [displaySignup, setDisplaySignup] = useState(false);

  const handleLogin = () => {
    setDisplayLogin(true);
    setDisplaySignup(false);
  };

  const handleSignup = () => {
    setDisplaySignup(true);
    setDisplayLogin(false);
  };

  return (
    <div className="container">
      <div className="home_page">
        <h1>Home Page</h1>
        <Link to="/login">
          <button onClick={handleLogin}>Login</button>
        </Link>
        <Link to="/signup">
          <button onClick={handleSignup}>SignUp</button>
        </Link>
      </div>
      {displayLogin && <Login />}
      {displaySignup && <Signup />}
    </div>
  );
};

export default Home;
