import React from "react";
import { Link } from "react-router-dom";

const Button = ({ className, label, icon }) => {
  return (
    <Link className={`btn ${className}`} to="#">
      <span>{icon}</span>
      {" " + label}
    </Link>
  );
};

export default Button;
