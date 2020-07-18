import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  
  render() {
    return (
      <nav className="pt-navbar">
        <div className="pt-navbar-group pt-align-left">
          <div className="pt-navbar-heading">Car Portal</div>
          <input className="pt-input" placeholder="Search cars..." type="text" />
        </div>
        <div className="pt-navbar-group pt-align-right">
          <Link className="pt-button pt-minimal pt-icon-music" to="/posts">Alk Cars</Link>
          <span className="pt-navbar-divider"></span>
        </div>
      </nav>
    );
  }
}

export default Header;
