import React, { memo } from 'react';
import './style.css';

const Header = () => (
  <nav className="inventory-header sb-topnav navbar navbar-expand navbar-dark bg-dark">
    <h3>COVID WARRIORS - Inventory Management</h3>
    <ul className="navbar-nav d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
          <a className="dropdown-item" href="/contact-us">Contact Us</a>
          <a className="dropdown-item" href="/login">Logout</a>
        </div>
      </li>
    </ul>
  </nav>
);

export default memo(Header);
