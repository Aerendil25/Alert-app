import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo-card">
        <h2>
            <Link to="/">
              LOGO HERE
            </Link>
        </h2>
    </div>
  );
}

export default Logo;