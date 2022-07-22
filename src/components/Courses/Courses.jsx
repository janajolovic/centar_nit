import React from "react";
import { Link } from "react-router-dom";
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
        <div className={classes.course}>
          <span>NEW</span>
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSdDsqd6aycthESNqo3ovcfwVKZcn84BM1_gItbzIDpnJItl-g/viewform"
          >
            Applications for IT Camp - Serbia 2022
          </a>
          <p>Applications are open until July 29th</p>
        </div>
        <div className={classes.course}>
          <span>NEW</span>
          <a
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSd8ud6wGFuzjIzfIKHuD8KUhvX8dm7aiCsVKHG7BE1eIcloAw/viewform"
          >
            Applications for Python Basics
          </a>
          <p>Applications are open until July 29th</p>
        </div>
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
