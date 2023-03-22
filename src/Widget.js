import React from "react";
import "./Widget.css";

function Widget() {
  return (
    <div className="widget">
      <iframe
        allowtransparency="true"
        src=""
        width="340"
        height="100"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widget;
