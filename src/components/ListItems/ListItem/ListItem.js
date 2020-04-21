import React, { memo, useContext } from 'react';
import './style.css';
import AppContext from '../../../AppContext';
import Avatar from '../../../assets/img/avatar.svg';
import DeleteIcon from '../../../assets/img/remove.svg';

const ListItem = (props) => {

  const context = useContext(AppContext);
  const numberOfDaysConsumed = Math.round((new Date().getTime() - new Date(props.item.creationDateTime).getTime()) / (1000 * 60 * 60 * 24));

  let currentStock = Math.round(props.item.stock - (numberOfDaysConsumed * props.item.unitConsumedPerDay));
  currentStock = currentStock <= 0 ? 0 : currentStock;

  const availabilityHTML = currentStock > 0
    ? <h5 style={{ color: 'green' }}>In stock.</h5>
    : <h5 style={{ color: 'red' }}>Out of stock.</h5>

  const removeCurrentItem = () => {
    if (!window.confirm('Item will be removed permanently. Continue?')) {
      return;
    }
    const allItemsInArray = [...context.inventoryData];

    allItemsInArray.forEach(categoryBasedObject => {
      if (categoryBasedObject.category === props.selectedCategory) {
        categoryBasedObject.items.splice(props.count, 1);
      }
    });
    context.updateInventoryData(allItemsInArray);
  }
  return (
    <div className="list-item">
      <div className="left-side">
        <img className="left-hand-section" src={Avatar} alt="item owner" />
        <div className="right-hand-section">
          <div className="top">
            <h4 className="margin-0">{props.item.name}</h4>
          </div>
          <div className="middle">
            {`Available ${currentStock} ${props.item.unit}.`}
          </div>
          <div className="bottom">
            {availabilityHTML}
          </div>
        </div>
      </div>
      <div className="middle-side"></div>
      <div className="right-side">
        <p className="notification">Interval: {props.item.notificationInterval} days</p>
        <img src={DeleteIcon} alt="delete item" onClick={removeCurrentItem} />
      </div>
    </div>
  );
}

export default memo(ListItem);
