import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="text-center">
          <h2>About</h2>
        </div>
        <div className="row clb-about-content">
          <div className="col-xs-12 col-md-4 clb-logo">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-8">
            <div className="about-text">
              <div className="row list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <p>{props.data ? props.data.paragraph : "loading..."}</p>
                </div>
              </div>

              <div className=" row list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <p>{props.data ? props.data.paragraph : "loading..."}</p>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
