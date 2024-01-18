import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signup } from "./UserSlice";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignup = () => {
    const createUser = { name, email, password };
    dispatch(signup(createUser));
    if (name && email && password) {
      alert("Account Created!");
      navigate("/logout");
    } else {
      alert("Please enter details");
      navigate("/signup");
    }
  };

  return (
    <div className="container">
      <div className="login_page">
        <h1>SignUp Page</h1>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleSignup}>Signup</button>

        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
