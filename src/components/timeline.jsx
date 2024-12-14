import React from "react";

export const Timeline = (props) => {
  return (
    <div id="timeline" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>timeline</h2>
        </div>
        <div className="timeline">
          {props.data &&
            props.data.map((e) => {
              return (
                <div
                  className={
                    e.side === "left"
                      ? "timeline-container left"
                      : "timeline-container right"
                  }
                >
                  <div className="date">{e.time}</div>
                  <i
                    className={
                      e.side === "left" ? "icon fa fa-home" : "icon fa fa-gift"
                    }
                  ></i>
                  <div className="content">
                    <h2>{e.name}</h2>
                    <p>{e.goal}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
