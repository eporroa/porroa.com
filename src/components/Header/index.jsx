import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Logo from "./Logo";

const Header = ({ siteTitle }) => (
  <header>
    <Logo>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <span className="role">Software Developer</span>
    </Logo>
    <ul id="main-nav">
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
