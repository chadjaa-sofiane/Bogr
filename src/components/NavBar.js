import React from "react";
import "../styles/NavBar.scss";
import ArrowIcon from "../assets/images/icon-arrow-dark.svg";
import HamburgerIcon from "../assets/images/icon-hamburger.svg";
function NavBar() {
  return (
    <div className="NavBar">
      <div className="logo"> Blogr </div>
      <div className="menu_bar">
        <div>
          Product <img alt="arrow" src={ArrowIcon} />
        </div>
        <div>
          Company <img alt="arrow" src={ArrowIcon} />
        </div>
        <div>
          Contact <img alt="arrow" src={ArrowIcon} />
        </div>
      </div>
      <div className="User_regester_btns">
        <button> Login </button>
        <button> Sign Up </button>
      </div>
      <label className="menu_toogle">
        <img src={HamburgerIcon} alt="burgerIcon" />
        <input type="checkbox" id="menubar" />
      </label>
    </div>
  );
}

export default NavBar;
