import React from 'react';

import './style.css';
import KeyLandmark from './KeyLandmark/KeyLandmark';
const Location = () => {
  const shops = [{
    shopid: 1001,
    name: 'Laksmi aata ghar',
    distance: '0.5 Km'
  }, {
    shopid: 1003,
    name: 'Babu shop',
    distance: '1 Km'
  }, {
    shopid: 1012,
    name: 'Big bazar',
    distance: '2.5 Km'
  }, {
    shopid: 1039,
    name: 'Spencer\'s',
    distance: '3 Km'
  }, {
    shopid: 1381,
    name: 'Annapurna shop',
    distance: '10 Km'
  }];

  const shopHTML = shops.map(shop => {
    return <KeyLandmark key={shop.shopid} shop={shop} />
  });

  return (
    <div className="find-shop-container">
      <div className="map-container"></div>
      <div className="search-location-container">
        <input className="search-map-input" type="text" placeholder="Search nearest shop" />
      </div>
      <div className="key-shops">
        <button type="button" className="btn btn-primary">Key Shops</button>
      </div>
      <div className="other-shops-list-container">
        {shopHTML}
      </div>
    </div>
  );
}

export default Location;