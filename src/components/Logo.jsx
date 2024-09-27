import React from "react";


function Logo({ width = "100px" }) {
  return (
    <img src= "\logo.png" alt="Website Logo" style={{ width }} />
  );
}

export default Logo;
