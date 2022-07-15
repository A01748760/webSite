
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

function Navbar() {
  // Set default value for click
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960){
        setButton(false);
    } else {
        setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            DAVID RODRIGUEZ <i class="fa-solid fa-code"></i>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
                to="/portfolio"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Portfolio
              </Link>
            </li>
            
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Me
              </Link>
            </li>
          
          </ul>
          {button && <Button buttonStyle='btn--outline'>ABOUT ME</Button>}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
