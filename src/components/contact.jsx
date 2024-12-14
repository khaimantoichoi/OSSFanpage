import React from "react";

export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-3 left-content">
            <img src="img/about.jpg" className="img-responsive" alt="" />
            <div className="social">
              <div className="row social-page">
                <a
                  className="col-md-3"
                  href={props.data ? props.data.facebook : "/"}
                >
                  <i className="fa fa-facebook"></i>
                </a>
                <p>{props.data ? props.data.facebook : "/"}</p>
              </div>
              <div className="row social-page">
                <a
                  className="col-md-3"
                  href={props.data ? props.data.email : "/"}
                >
                  <i className="fa fa-envelope"></i>
                </a>
                <p>{props.data ? props.data.email : "/"}</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mid-content">
            <h2>Contact Info</h2>
            {props.data &&
              props.data.member &&
              props.data?.member.map((e, i) => {
                return (
                  <div key={i} className="contact-item">
                    <h3>Contact Info</h3>
                    <p>{e.name}</p>
                    <p>Facebook: {e.facebook}</p>
                    <p>Email:{e.email}</p>
                    <p>Mobile:{e.phone}</p>
                  </div>
                );
              })}
          </div>
          <div className="col-md-3 right-content address">
            {/* map in here */}
          </div>
        </div>
      </div>
    </div>
  );
};
