import "../styles/Header.scss";
import NavBar from "./NavBar";
function Header() {
  return (
    <div className="Header_wrapper">
      <div className="Header_container">
        <NavBar />
        <div className="description">
          <h1>A modern publishing platform</h1>
          <h3>Grow your audience and build your online brad</h3>
          <div className="btns">
            <button className="Start_free"> Start for free </button>
            <button className="Learn_more"> Learn More </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
