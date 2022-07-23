import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./Courses.module.css";

const Courses = () => {
  const navigate = useNavigate();
  return (

    <div className={classes.app}>
      <div className={classes.navbar}>
        <Sidebar />
      </div>
    <div className={classes.main}>

      <div className={classes.container}>
        <div className={classes.topic}>
          <h1>Let's start a new advanture</h1>
          <p>
            Start a career and discover your profession in the IT industry. A
            lot of work and passion and the right job is waiting for you.
          </p>
          <p>
            In collaboration with Regional Innovation Start Up Centre Novi Pazar
            we provide you courses for all of your IT needs and desires.
          </p>
        </div>
        <div className={classes.new_courses}>
          <div className={classes.course}>
            <div
              className={classes.course_left}
              style={{ backgroundColor: "#ffae00" }}
            >
              <p className={classes.text}>COURSE</p>
              <h1>IT Camp</h1>
            </div>
            <div className={classes.course_right}>
              <p>Learn HTML, CSS, JavaScript and React JS</p>
              <p>
                <FontAwesomeIcon
                  style={{ marginRight: "5px" }}
                  icon="fa-solid fa-clock"
                />{" "}
                6 months
              </p>
              <p>
                <FontAwesomeIcon
                  style={{ marginRight: "5px" }}
                  icon="fa-solid fa-calendar"
                />{" "}
                3 times a week
              </p>
              <p>Applications are open until July 29th</p>
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSdDsqd6aycthESNqo3ovcfwVKZcn84BM1_gItbzIDpnJItl-g/viewform"
              >
                Sign up
                <FontAwesomeIcon
                  style={{ marginLeft: "5px" }}
                  icon="fa-solid fa-arrow-right-long"
                />
              </a>
            </div>
          </div>
          <div className={classes.course}>
            <div
              className={classes.course_left}
              style={{ backgroundColor: "#2a265f" }}
            >
              <p className={classes.text}>COURSE</p>
              <h1>Python</h1>
            </div>
            <div className={classes.course_right}>
              <p>Learn Basics of Python</p>
              <p>
                <FontAwesomeIcon
                  style={{ marginRight: "5px" }}
                  icon="fa-solid fa-clock"
                />{" "}
                3 months
              </p>
              <p>
                <FontAwesomeIcon
                  style={{ marginRight: "5px" }}
                  icon="fa-solid fa-calendar"
                />{" "}
                3 times a week
              </p>
              <p>Applications are open until July 29th</p>
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSd8ud6wGFuzjIzfIKHuD8KUhvX8dm7aiCsVKHG7BE1eIcloAw/viewform"
              >
                Sign up
                <FontAwesomeIcon
                  style={{ marginLeft: "5px" }}
                  icon="fa-solid fa-arrow-right-long"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Courses;
