import React from "react";

export const Achievement = (props) => {
  return (
    <div id="achievement" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Achievement</h2>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.name}-${i}`}
                  className="col-md-3 col-sm-6 achievement"
                >
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="achievement-img" />
                    <div className="caption">
                      <h1>{d.number}</h1>
                      <p>{d.name}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
      <div className="text-right">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed</p>
      </div>
    </div>
  );
};
