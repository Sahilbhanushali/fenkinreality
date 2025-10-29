import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <>
      <div className="side_menu4_overlay"></div>
      <div className="side_menu4_overlay2"></div>

      <div className="side_menu_style4">
        <div className="content">
          <div className="main_links">
            <ul>
              <li>
                <Link to="/" className="main_link">
                  home
                </Link>
              </li>
              <li>
                <Link to="/innerpages/about" className="main_link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/innerpages/portfolio" className="main_link">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/innerpages/services" className="main_link">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/innerpages/contact" className="main_link">
                  contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <span className="clss">
          <i className="la la-times"></i>
        </span>
      </div>
    </>
  );
}

export default Menu;
