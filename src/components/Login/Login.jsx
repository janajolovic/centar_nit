import React, { useState } from "react";
import classes from "./Login.module.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className={classes.login_container}>
      <div className={classes.login_form}>
        <div className={classes.login_left}>
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
              value={inputs.password}
              type="password"
              placeholder="Password"
              name="password"
              id="password"
            ></input>
            <button type="submit">Log In</button>
          </form>
          <p>Don't have an account?</p>
        </div>
        <div className={classes.login_right}>
          <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--J7S7OK3h--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/mnsvn3a5661wjktilw9j.JPG"></img>
        </div>
      </div>
    </div>
  );
};

export default Login;
