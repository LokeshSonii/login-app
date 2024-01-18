import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./UserSlice";
import { allUsers } from "./UserSlice";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const users = useSelector(allUsers);
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = { email, password };

    const userPresent = users.some(
      (obj) => obj.email === user.email && obj.password === user.password
    );

    if (userPresent) {
      alert("user login successfully");
      dispatch(login(user));
      navigate("/logout");
    } else {
      alert("Wrong Credentials.");
      navigate("/login");
    }
  };

  return (
    <div className="container">
      <div className="login_page">
        <h1>Login Page</h1>
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
        <button onClick={handleLogin}>Login</button>

        <Link to="/">
          <button>Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
