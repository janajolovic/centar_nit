import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={classes.app}>
      <div className={classes.navbar}>
        <Sidebar />
      </div>
      <div className={classes.main}>
        <h1>homepage</h1>
      </div>
    </div>
  );
};

export default Homepage;
