import React from "react";
import "./List.css";

export const ListItem = props =>
  <div className="list-container">
  	<li className="list-group-item">
    	{props.children}
  	</li>
  </div>;
