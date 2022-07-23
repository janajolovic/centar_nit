import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import classes from "./Courses.module.css";

const Courses = () => {
  const navigate = useNavigate()
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
      <div className={classes.all_courses}>
        <h1>All Courses</h1>
        <div className={classes.courses_cards}>
          <div className={classes.card}>
            <img style={{width: "90%", height: "180px", margin: "10px"}} src="https://developerpitstop.com/wp-content/uploads/2021/08/html-css-js.jpeg" />
            <div className={classes.card_text}>
              <h3>IT Camp</h3>
              <p>Learn HTML, CSS, JavaScript and React JS</p>
              <p><FontAwesomeIcon style={{marginRight: "5px"}} icon="fa-solid fa-clock" /> 6 months</p>
              <p><FontAwesomeIcon style={{marginRight: "5px"}} icon="fa-solid fa-calendar" /> 3 times a week</p>
            </div>
            <div className={classes.card_footer}>
              <button onClick={() => navigate("/")}>Start <FontAwesomeIcon style={{marginLeft: "5px"}} icon="fa-solid fa-arrow-right-long" /></button>
            </div>
          </div>
          <div className={classes.card}>
            <img src="https://tecswan.com/wp-content/uploads/2021/03/python-socket-programming.jpg" />
            <div className={classes.card_text}>
              <h3>Python</h3>
              <p>Learn the basics of Python</p>
              <p><FontAwesomeIcon style={{marginRight: "5px"}} icon="fa-solid fa-clock" /> 3 months</p>
              <p><FontAwesomeIcon style={{marginRight: "5px"}} icon="fa-solid fa-calendar" /> 3 times a week</p>
            </div>
            <div className={classes.card_footer}>
              <button onClick={() => navigate("/")}>Start <FontAwesomeIcon style={{marginLeft: "5px"}} icon="fa-solid fa-arrow-right-long" /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
