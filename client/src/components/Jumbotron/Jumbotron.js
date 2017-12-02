import React from "react";


const Jumbotron = ({ children }) =>
  <div style={{ height: 450, backgroundImage: `linear-gradient(to top, #33ccff 25%, #999966 82%)` }} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;
