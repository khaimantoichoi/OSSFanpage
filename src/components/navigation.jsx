import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            OSSTemplate
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#structure" className="page-scroll">
                Structure
              </a>
            </li>
            <li>
              <a href="#timeline" className="page-scroll">
                Timeline
              </a>
            </li>
            <li>
              <a href="#slideshow" className="page-scroll">
                Slideshow
              </a>
            </li>
            <li>
              <a href="#achievement" className="page-scroll">
                Achievement
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
            {/* <li>
              <a href="#Test" className="page-scroll li-dropdown">
                Test
                <i className="material-icons">arrow_drop_down</i>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
