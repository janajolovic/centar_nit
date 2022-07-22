import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./Courses.module.css";

const Courses = () => {
  return (
    <div className={classes.container}>
      <div className={classes.topic}>
        <h1>Let's start a new advanture</h1>
        <p>
          Start a career and discover your profession in the IT industry. A lot
          of work and passion and the right job is waiting for you.
        </p>
        <p>
          In collaboration with Regional Innovation Start Up Centre Novi Pazar
          we provide you courses for all of your IT needs and desires.
        </p>
      </div>
      <div className={classes.new_courses}>
        <div></div>
        <div></div>
      </div>
      <div className={classes.new_courses}>
        <div></div>
        <div></div>
      </div>
      <div className={classes.new_courses}>
        <div></div>
        <div></div>
      </div>
      <h1>Courses</h1>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Courses;
