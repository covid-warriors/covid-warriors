import React, { memo } from 'react';

const SidePanel = () => (
  <div id="layoutSidenav_nav">
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <a className="nav-link" href="/dashboard"
          ><div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                      Dashboard</a
          >
          <a className="nav-link" href="/about-us"
          ><div className="sb-nav-link-icon"></div>
                      About Us</a
          >
        </div>
      </div>
    </nav>
  </div>
);

export default memo(SidePanel);
