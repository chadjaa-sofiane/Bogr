import "../styles/Footer.scss";
const Footer = () => {
  return (
    <div className="footer_wrapper">
      <div className="footer_container">
        <div>
          <h1 className="title"> Blogr </h1>
        </div>
        <div className="links-wrapper">
          <div className="links">
            <h3>Product </h3>
            <ul>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Marketplace</li>
              <li>Features</li>
              <li>Integrations</li>
            </ul>
          </div>

          <div className="links">
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>

          <div className="links">
            <h3>Connect</h3>
            <ul>
              <li>Contact</li>
              <li>Newsletter</li>
              <li>LinkedIn</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
