import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const InventoryCardPanel = () => {
  const setCurrentCategory = (category) => {
    window.selectedCategory = category;
  }
  return (
    <React.Fragment>
      <h4>All items</h4>
      <div className="inventory-card">
        <Link to="/add-edit-inventory" onClick={() => setCurrentCategory('Grocery')}>
          <div className="grocery-icon"></div>
        </Link>
        <Link to="/add-edit-inventory" onClick={() => setCurrentCategory('Meat')}>
          <div className="meat-icon"></div>
        </Link>
        <Link to="/add-edit-inventory" onClick={() => setCurrentCategory('Medicine')}>
          <div className="medicine-icon"></div>
        </Link>
        <a href="#">
          <div className="plus-icon"></div>
        </a>
      </div>
    </React.Fragment>
  )
};

export default memo(InventoryCardPanel);
