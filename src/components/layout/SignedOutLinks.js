import React from "react";
import { NavLink } from "react-router-dom";

const ignedOutLinks = () => {
  return (
    <>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/signin" className="black-text">
            Log In
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className="black-text">
            Sign Up
          </NavLink>
        </li>
      </ul>
      <ul className="sidenav" id="mobile-demo">
        <br />
        <li>
          <a href="/signup">Sign Up</a>
        </li>
        <hr style={{ borderTop: "2px solid #ec407a", width: "90%" }} />
        <li>
          <a href="/signin">Log In</a>
        </li>
        <hr style={{ borderTop: "2px solid #ec407a", width: "90%" }} />
        <li>
          <a href="/blog">Blog</a>
        </li>
        <hr style={{ borderTop: "2px solid #ec407a", width: "90%" }} />
        <li>
          <a href="/forum">Forun</a>
        </li>
        <hr style={{ borderTop: "2px solid #ec407a", width: "90%" }} />
      </ul>
    </>
  );
};

export default ignedOutLinks;
