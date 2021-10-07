import React from 'react';
import {Link} from "react-router-dom";

/**
 * COMPOSANT HEADER
 * Cette classe affiche le header
 */
class Header extends React.Component {
  render(){
    return (
      <div className="container">
            <nav className="navbar">
              <Link to="/" className="navbar-logo">
                      <span className="navbar-logo-start">K</span> 
                      <svg className="navbar-logo-svg" viewBox="0 0 47 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M46.2658 20.4632L24.3497 7.67847L12.1945 0.637604L0.22345 21.5749L0.407616 41.2153L22.1396 54L24.3497 52.703V34.1744L34.1106 16.9428L44.0558 22.6866V41.2153L46.2658 39.9183V20.4632Z" fill="#FF6060"/>
                      </svg>
                      <span className="navbar-logo-end">s</span> 
                      <span className="navbar-logo-end">a</span> 
              </Link>
              <ul className="navbar-link">
                  <li className="navbar-link-item"> 
                      <Link to="/">Accueil</Link>
                  </li>
                  <li className="navbar-link-item"> 
                      <Link to="/about">A propos</Link>
                  </li>
              </ul>
            </nav>
      </div>
    );
  }
}

export default Header;