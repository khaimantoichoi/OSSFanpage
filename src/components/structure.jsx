import React from "react";

export const Structure = (props) => {
  return (
    <div id="structure" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Structure</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
          <div
            className="col-md-6"
            style={{ height: "500px", backgroundColor: "blue" }}
          ></div>
          <div
            className="row col-md-6"
            style={{ height: "500px", backgroundColor: "red" }}
          >
            <div
              className="aaaaa"
              style={{ height: "300px", backgroundColor: "green" }}
            ></div>
            <div
              className="bbb"
              style={{ height: "200px", backgroundColor: "white" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
