import React, { useState } from "react";
import classes from "./Register.module.css";
import { Link } from "react-router-dom";

const Register = () => {
  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className={classes.register_container}>
      <div className={classes.register_form}>
          <h1>Log In</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setInputs({
                email: "",
                password: "",
              });
            }}
          >
            <input
              onChange={handleChange}
              value={inputs.email}
              type="email"
              placeholder="Email"
              name="email"
              id="email"
            ></input>
            <input
              onChange={handleChange}
              value={inputs.username}
              type="text"
              placeholder="Username"
              name="username"
              id="username"
            ></input>
            <input
              onChange={handleChange}
              value={inputs.password}
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            ></input>
            <input
              onChange={handleChange}
              value={inputs.confirmPassword}
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              id="confirmPassword"
            ></input>
            <button type="submit">Sign Up</button>
          </form>
          <p>Already have an account? <Link style={{color: "#0568c1", textDecoration: 'none'}} to="/login">Login</Link></p>
        </div>
    </div>
  );
};

export default Register;
