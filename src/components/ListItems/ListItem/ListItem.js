import React, { memo } from 'react';
import './style.css';
import Avatar from '../../../assets/img/avatar.svg';
import DeleteIcon from '../../../assets/img/remove.svg';

const ListItem = (props) => {
  console.log('props--', props);

  const availabilityHTML = props.item.stock > 0
    ? <h5 style={{ color: 'green' }}>In stock.</h5>
    : <h5 style={{ color: 'red' }}>Out of stock.</h5>
  return (
    <div className="list-item">
      <div className="left-side">
        <img className="left-hand-section" src={Avatar} alt="item owner" />
        <div className="right-hand-section">
          <div className="top">
            <h4 className="margin-0">{props.item.name}</h4>
          </div>
          <div className="middle">
            {`Available ${props.item.stock} ${props.item.unit}.`}
          </div>
          <div className="bottom">
            {availabilityHTML}
          </div>
        </div>

      </div>
      <div className="middle-side">

      </div>
      <div className="right-side">
        <p className="notification">{props.item.consumptionTimeframe} notofication</p>
        <img src={DeleteIcon} alt="delete item" />

      </div>
    </div>
  );
}

export default memo(ListItem);
