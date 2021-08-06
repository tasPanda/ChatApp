import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-sm bg-light mb-0 footer"
        style={{ height: "7vh" }}
      >
        <div className="text-center text-light w-100">
          <p className="mb-0">
            Designed Inspired from
            <a href="https://dribbble.com" className="px-2">
              dribbble
            </a>
            Find code in
            <a href="https://github.com/shelcia/ChatApp" className="px-2">
              Github
            </a>
            Developed By
            <a href="https://github.com/Ztasneem" className="px-2">
              Tasneemah.
            </a>
          </p>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Footer;
