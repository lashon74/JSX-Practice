import React from "react";
import ReactDom from "react-dom";

const date = new Date().getFullYear();

var name = "Lashon Hudson";

ReactDom.render(
  <div>
    <p>Created by {name}</p>
    <p>
      Copyright <span>{date} </span>
    </p>
  </div>,

  document.getElementById("root")
);
