import React from "react";
// import logo from "../assets/logo.png"; 

function Logo({ width = "100px" }) {
  return (
    <img src= "\logo.png" alt="Website Logo" style={{ width }} />
  );
}

export default Logo;
