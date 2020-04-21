import React from 'react';
import './style.css';

const KeyLandmark = (props) => {
  return (
    <div className="key-landmarks-container" onClick={props.shopSelected}>
      <div className="left-side">
        <div className="top">
          <h6 className="margin-0">{props.shop.name}</h6>
        </div>
        <div className="bottom">
          Key Landmarks
        </div>
      </div>
      <div className="right-side">
        <p className="distance-to-shop">{props.shop.distance}</p>
      </div>
    </div>
  );
}

export default KeyLandmark;