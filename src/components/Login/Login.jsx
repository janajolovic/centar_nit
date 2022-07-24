import React, { useState } from "react";
import classes from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    event.preventDefault();
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const signInHandler = (event) => {
    event.preventDefault();
    setInputs({
      email: "",
      password: "",
    });

    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: inputs.email,
          password: inputs.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "aplication/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Invalid credentials");
        }
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert(error);
      });

    navigate("/");
  };

  return (
    <div className={classes.login_container}>
      <div className={classes.login_form}>
        <div className={classes.login_left}>
          <h1>Login</h1>
          <form onSubmit={signInHandler}>
            <input
              onChange={changeHandler}
              value={inputs.email}
              type="email"
              placeholder="Email"
              name="email"
              id="email"
            ></input>
            <input
              onChange={changeHandler}
              value={inputs.password}
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            ></input>
            <button type="submit">Log In</button>
          </form>
          <p>
            Don't have an account?{" "}
            <Link
              style={{ color: "#0568c1", textDecoration: "none" }}
              to="/register"
            >
              Register
            </Link>
          </p>
        </div>
        <div className={classes.login_right}>
          <img src="https://ak15suthar.github.io/Portfolio/img/work.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Login;
