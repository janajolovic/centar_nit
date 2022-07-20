import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./Homepage.module.css"


const Homepage = () => {
    return (
        <div className={classes.app}>
            <Sidebar/>
            <h1>homepage</h1>
        </div>
    )
}

export default Homepage