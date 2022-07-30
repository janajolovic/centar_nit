import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <h1>Centar NIT</h1>
      <Link to="/">
        <div className={classes.icons}>
          <FontAwesomeIcon icon="fa-solid fa-house" />
          <span>Homepage</span>
        </div>
      </Link>
      <Link to="/courses">
        <div className={classes.icons}>
          <FontAwesomeIcon icon="fa-solid fa-laptop-code" />
          <span>Courses</span>
        </div>
      </Link>
      <Link to="/">
        <div className={classes.icons}>
          <FontAwesomeIcon icon="fa-solid fa-bell" />
          <span>Notifications</span>
        </div>
      </Link>
      <Link to="/">
        <div className={classes.icons}>
          <FontAwesomeIcon icon="fa-solid fa-calendar" />
          <span>News</span>
        </div>
      </Link>
      <Link to="/">
        <div className={classes.icons}>
          <FontAwesomeIcon icon="fa-solid fa-address-card" />
          <span>About us</span>
        </div>
      </Link>
      <Link to="/">
        <div className={classes.icons}>
          <FontAwesomeIcon icon="fa-solid fa-user" />
          <span>My profile</span>
        </div>
      </Link>
      <Link to="/">
        <div className={classes.icons}>
          <FontAwesomeIcon icon={["fas", "fa-right-from-bracket"]} size="lg" />
          <span>Logout</span>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
