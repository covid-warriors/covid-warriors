import React, { useState } from 'react';

import Map from './Map/Map';
import ShopLocations from './../../data/data';
import './style.css';
import KeyLandmark from './KeyLandmark/KeyLandmark';

const Location = () => {

  const [ state, setState ] = useState({ lat: ShopLocations.information[0].lat, long: ShopLocations.information[0].lng });

  const shopHTML = ShopLocations.information.map(shop => {
    return <KeyLandmark key={shop.shopid} shop={shop} shopSelected={() => chooseShopHandler(shop.lat, shop.lng)} />
  });

  const chooseShopHandler = (lat, long) => {
    setState({ lat, long });
  }

  return (
    <div className="find-shop-container">
      <div className="map-container">
        <Map {...state} />
      </div>
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