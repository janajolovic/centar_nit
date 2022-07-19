import React from 'react'
import classes from "./Login.module.css"
import {Link} from "react-router-dom"

const Login = () => {
  return (
    <div className={classes.login_container}>
        <div className={classes.login_form}>
            <div className={classes.login_left}>
                <form>
                    <input
                        type="email"
                        placeholder="email"
                        name="email"
                        id="email"
                    ></input>
                    <input
                        type="password"
                        placeholder="password"
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
  )
}

export default Login