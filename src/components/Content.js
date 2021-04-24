import React from "react";
import editeurIamge from "../assets/images/illustration-editor-desktop.svg";
import laptopImage from "../assets/images/illustration-laptop-desktop.svg";
import PhoneIamge from "../assets/images/illustration-phones.svg";

import editeurIamgeMobile from "../assets/images/illustration-editor-mobile.svg";
import laptopImageMobile from "../assets/images/illustration-laptop-mobile.svg";

import "../styles/content.scss";
function Content() {
  return (
    <div>
      <div className="content_1_wrapper">
        <div className="content_1_container">
          <img
            src={editeurIamgeMobile}
            className="mobile_image"
            alt="editeur image"
          />

          <h1 className="content_1_title">Designed for the future</h1>
          <div className="editeur_image">
            <img src={editeurIamge} className="desktop_image" alt="editeur image" />
          </div>

          <div className="describe">
            <h2>Introducing an extensible editor</h2>
            <p>
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className="describe">
            <h2>Robust content management</h2>
            <p>
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
      </div>
      <div className="content_2_wrapper">
        <div className="content_2_container">
          <div className="phone_image">
            <img alt="two phones Icon" src={PhoneIamge} />
          </div>
          <div className="describe">
            <h1>State of the Art Infrastructure</h1>
            <p>
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </div>
      <div className="content_3_wrapper">
        <div className="content_3_container">
          <div className="labtop_image">
            <img alt="laptop" className="desktop_image" src={laptopImage} />
          </div>
          <div className="describe">
            <h1>Free, open, simple</h1>
            <p>
              Blogr is a free and open source application backed by a large
              community of helpful developers. It supports features such as code
              syntax highlighting, RSS feeds, social media integration,
              third-party commenting tools, and works seamlessly with Google
              Analytics. The architecture is clean and is relatively easy to
              learn.
            </p>
          </div>
          <div className="describe">
            <h1> Powerful tooling </h1>
            <p>
              Batteries included. We built a simple and straightforward CLI tool
              that makes customization and deployment a breeze, but capable of
              producing even the most complicated sites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
