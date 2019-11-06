import React from "react";
import logo from "../../assets/react-styled-system-icons.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Link to="/">
      <header>
        <img src={logo} alt="react-styled-system-icons" />
        <span>react-styled-system-icons</span>
      </header>
    </Link>
  );
}

export default Header;
