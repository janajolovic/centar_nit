import React, { useState } from "react";
import classes from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    e.preventDefault()
    setInputs({
      ...inputs,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className={classes.login_container}>
      <div className={classes.login_form}>
        <div className={classes.login_left}>
          <h1>Login</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setInputs({
                email: "",
                password: "",
              });
              console.log(inputs)
              navigate("/")
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
              value={inputs.password}
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            ></input>
            <button type="submit">Log In</button>
          </form>
          <p>Don't have an account? <Link style={{color: "#0568c1", textDecoration: 'none'}} to="/register">Register</Link></p>
        </div>
        <div className={classes.login_right}>
          <img src="https://ak15suthar.github.io/Portfolio/img/work.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Login;
