import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
  <div className="img_wrap">
    <img src={"https://icon-library.com/images/react-icon/react-icon-29.jpg"} alt={"React"} className="img"/>
  </div>
  <div className="text_wrap">
    Welcome to React 18
    <ul className="react_list">
      <li>New Updates</li>
      <li>New Fetures</li>
      <li>New Horizons</li>
    </ul>
  </div>
  </>
);