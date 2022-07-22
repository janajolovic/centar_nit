import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <h1>Centar NIT</h1>
      <div className={classes.icons}>
        <FontAwesomeIcon icon="fa-solid fa-house" />
        <Link to="/">Homepage</Link>
      </div>
      <div className={classes.icons}>
        <FontAwesomeIcon icon="fa-solid fa-laptop-code" />
        <Link to="/courses">Courses</Link>
      </div>
      <div className={classes.icons}>
        <FontAwesomeIcon icon="fa-solid fa-bell" />
        <Link to="/">Notifications</Link>
      </div>
      <div className={classes.icons}>
        <FontAwesomeIcon icon="fa-solid fa-calendar" />
        <Link to="/">News</Link>
      </div>
      <div className={classes.icons}>
        <FontAwesomeIcon icon="fa-solid fa-address-card" />
        <Link to="/">About us</Link>
      </div>
      <div className={classes.icons}>
        <FontAwesomeIcon icon="fa-solid fa-user" />
        <Link to="/">My profile</Link>
      </div>
      <div className={classes.icons}>
        <FontAwesomeIcon icon={["fas", "fa-right-from-bracket"]} size="lg" />
        <Link to="/">Logout</Link>
      </div>
    </div>
  );
};

export default Sidebar;
