import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaClock, FaGlobe } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-md-5 d-flex align-items-center icon-text">
            <FaMapMarkerAlt />
            <span className="me-4">184 Main Collins Street</span>
            <FaPhone />
            <span>(965) 436 3274</span>
          </div>
          <div className="col-md-2"></div> {/* Empty space in the center */}
          <div className="col-md-5 d-flex align-items-center justify-content-end icon-text">
            <FaClock />
            <span className="me-4">Mon - Fri: 6:30am - 07:45pm</span>
            <FaGlobe />
            <div className="dropdown ms-2">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="languageDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Select Language
              </button>
              <ul className="dropdown-menu" aria-labelledby="languageDropdown">
                <li><a className="dropdown-item" href="#!">English</a></li>
                <li><a className="dropdown-item" href="#!">Spanish</a></li>
                <li><a className="dropdown-item" href="#!">French</a></li>
                <li><a className="dropdown-item" href="#!">German</a></li>
                <li><a className="dropdown-item" href="#!">Chinese</a></li>
                <li><a className="dropdown-item" href="#!">Japanese</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
