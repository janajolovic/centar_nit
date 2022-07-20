import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sidebar = () => {
  return (
    <div>
      <h1 style={{ color: "black" }}>Centar NIT</h1>
      <div>
      <FontAwesomeIcon icon="fa-solid fa-house" />
        <Link to="/">Homepage</Link>
      </div>
      <div>
      <FontAwesomeIcon icon="fa-solid fa-laptop-code" />
        <Link to="/">Courses</Link>
      </div>
      <div>
        <FontAwesomeIcon icon="fa-solid fa-bell" />
        <Link to="/">Notifications</Link>
      </div>
      <div>
        <FontAwesomeIcon icon="fa-solid fa-calendar" />
        <Link to="/">News</Link>
      </div>
      <div>
        <FontAwesomeIcon icon="fa-solid fa-address-card" />
        <Link to="/">About us</Link>
      </div>
      <div>
        <FontAwesomeIcon icon="fa-solid fa-user" />
        <Link to="/">My profile</Link>
      </div>
      <div>
        <FontAwesomeIcon icon={["fas", "fa-right-from-bracket"]} size="lg" />
        <Link to="/">Logout</Link>
      </div>
    </div>
  );
};

export default Sidebar;
