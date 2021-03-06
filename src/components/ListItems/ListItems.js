import React, { memo, useContext } from 'react';
import ListItem from './ListItem/ListItem';
import AppContext from '../../AppContext';
import './style.css';

const ListItems = (props) => {

  const context = useContext(AppContext);

  const selectedCategory = window.selectedCategory;

  const list = [];

  context.inventoryData.forEach((categoryBasedObject, index) => {
    if (categoryBasedObject.category === selectedCategory) {
      categoryBasedObject.items.forEach((item, count) => {
        list.push(
          <ListItem
            key={'1' + index + count}
            count={count}
            item={item}
            {...props}
            selectedCategory={selectedCategory}
          />
        );
      });
    }
  });

  return (
    <div className="list-wrapper">
      <div className={`item-image ${selectedCategory}`}></div>
      <div className="list-header">
        <div onClick={() => props.history.push('/dashboard')} className="back-to-dashboard">Back</div>
        <div className="item-category">{selectedCategory}</div>
        <button className="view-map-cotainer" onClick={()=> props.history.push('/location')}><span>Find shop</span></button>
      </div>
      <div className="items-button-container">
        <div className="list-items">
          {list}
        </div>
        <button onClick={() => props.history.push('/add-items')} className="btn btn-primary custom-add">Add Item</button>
      </div>
    </div>
  );

}

export default memo(ListItems);
