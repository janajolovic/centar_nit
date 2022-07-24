import React, { useState } from "react";
import classes from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  
  const navigate = useNavigate()

  const [inputs, setInputs] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });


  const changeHandler = (event) => {
    event.preventDefault()
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const signupHandler = (event) => {
      event.preventDefault();
      setInputs({
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
      });
      fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      method: 'POST',
      body: JSON.stringify({
        email: inputs.email,
        password: inputs.password,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'aplication/json'
      },
    })
    navigate("/login")
  }

  return (
    <div className={classes.register_container}>
      <div className={classes.register_form}>
          <h1>Register</h1>
          <form onSubmit={signupHandler}>
            <input
              onChange={changeHandler}
              value={inputs.email}
              type="email"
              placeholder="Email"
              name="email"
              id="email">
              </input>
            <input
              onChange={changeHandler}
              value={inputs.username}
              type="text"
              placeholder="Username"
              name="username"
              id="username"
            ></input>
            <input
              onChange={changeHandler}
              value={inputs.password}
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            ></input>
            <input
              onChange={changeHandler}
              value={inputs.confirmPassword}
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              id="confirmPassword"
            ></input>
            <button type="type">Sign Up</button>
          </form>
          <p>Already have an account? <Link style={{color: "#0568c1", textDecoration: 'none'}} to="/login">Login</Link></p>
        </div>
    </div>
  );
};

export default Register;
