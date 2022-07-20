import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  const [isHover, setIsHover] = useState(true);
  return (
    <div className={classes.sidebar_container}>
      {isHover ? (
        <div className={classes.sidebar}>
          <h1 style={{ color: "black" }}>Centar NIT</h1>
          <div
            onClick={() => {
              setIsHover(!isHover);
            }}
            className={classes.icons}
          >
            <FontAwesomeIcon icon="fa-solid fa-house" />
            <Link to="/">Homepage</Link>
          </div>
          <div
            onClick={() => {
              setIsHover(!isHover);
            }}
            className={classes.icons}
          >
            <FontAwesomeIcon icon="fa-solid fa-laptop-code" />
            <Link to="/">Courses</Link>
          </div>
          <div
            onClick={() => {
              setIsHover(!isHover);
            }}
            className={classes.icons}
          >
            <FontAwesomeIcon icon="fa-solid fa-bell" />
            <Link to="/">Notifications</Link>
          </div>
          <div
            onClick={() => {
              setIsHover(!isHover);
            }}
            className={classes.icons}
          >
            <FontAwesomeIcon icon="fa-solid fa-calendar" />
            <Link to="/">News</Link>
          </div>
          <div
            onClick={() => {
              setIsHover(!isHover);
            }}
            className={classes.icons}
          >
            <FontAwesomeIcon icon="fa-solid fa-address-card" />
            <Link to="/">About us</Link>
          </div>
          <div
            onClick={() => {
              setIsHover(!isHover);
            }}
            className={classes.icons}
          >
            <FontAwesomeIcon icon="fa-solid fa-user" />
            <Link to="/">My profile</Link>
          </div>
          <div
            onClick={() => {
              setIsHover(!isHover);
            }}
            className={classes.icons}
          >
            <FontAwesomeIcon
              icon={["fas", "fa-right-from-bracket"]}
              size="lg"
            />
            <Link to="/">Logout</Link>
          </div>
        </div>
      ) : (
        <div className={classes.sidebar_container_close}>
          <div className={classes.sidebar}>
            <div
              onClick={() => {
                setIsHover(!isHover);
              }}
              className={classes.icons_close}
            >
              <FontAwesomeIcon icon="fa-solid fa-house" />
            </div>
            <div
              onClick={() => {
                setIsHover(!isHover);
              }}
              className={classes.icons_close}
            >
              <FontAwesomeIcon icon="fa-solid fa-laptop-code" />
            </div>
            <div
              onClick={() => {
                setIsHover(!isHover);
              }}
              className={classes.icons_close}
            >
              <FontAwesomeIcon icon="fa-solid fa-bell" />
            </div>
            <div
              onClick={() => {
                setIsHover(!isHover);
              }}
              className={classes.icons_close}
            >
              <FontAwesomeIcon icon="fa-solid fa-calendar" />
            </div>
            <div
              onClick={() => {
                setIsHover(!isHover);
              }}
              className={classes.icons_close}
            >
              <FontAwesomeIcon icon="fa-solid fa-address-card" />
            </div>
            <div
              onClick={() => {
                setIsHover(!isHover);
              }}
              className={classes.icons_close}
            >
              <FontAwesomeIcon icon="fa-solid fa-user" />
            </div>
            <div
              onClick={() => {
                setIsHover(!isHover);
              }}
              className={classes.icons_close}
            >
              <FontAwesomeIcon
                icon={["fas", "fa-right-from-bracket"]}
                size="lg"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
