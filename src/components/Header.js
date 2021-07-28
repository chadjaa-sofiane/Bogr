import "../styles/Header.scss";
import { ReactComponent as ArrowIcon } from "../assets/images/icon-arrow-dark.svg";
import HamburgerIcon from "../assets/images/icon-hamburger.svg";

function Header() {
  return (
    <div className="Header">
      <div className="logo"> Blogr </div>
      <div className="nav_container">
        <ul className="nav_bar">
          <li className="Nav_item">
            <button>
              Product <ArrowIcon />
            </button>
            <ul className="drop_down_menu">
              <li> Overview</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Integrations</li>
            </ul>
          </li>
          <li className="Nav_item">
            <button>
              Contact <ArrowIcon />
            </button>
            <ul className="drop_down_menu">
              <li>Contact</li>
              <li>Newsletter</li>
              <li>LinkedIn</li>
            </ul>
          </li>
          <li className="Nav_item">
            <button>
              Company <ArrowIcon />
            </button>
            <ul className="drop_down_menu">
              <li> About</li>
              <li>Team</li>
              <li> Blog</li>
              <li> Careers</li>
            </ul>
          </li>
        </ul>
        <div className="User_regester_btns">
          <button> Login </button>
          <button> Sign Up </button>
        </div>
      </div>
      <label className="menu_toogle">
        <img src={HamburgerIcon} alt="burgerIcon" />
        <input type="checkbox" id="menubar" />
      </label>
    </div>
  );
}

export default Header;
