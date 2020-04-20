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
        list.push(<ListItem key={'1' + index + count} item={item} />);
      });
    }
  });

  return (
    <div className="list-wrapper">
      <div className="item-image"></div>
      <div className="list-items">
        {list}
      </div>
    </div>
  );

}

export default memo(ListItems);
