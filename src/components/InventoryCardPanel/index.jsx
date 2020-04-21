import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const InventoryCardPanel = () => {
  const setCurrentCategory = (category) => {
    window.selectedCategory = category;
  }
  return (
    <React.Fragment>
      <h4>All Categories</h4>
      <div className="inventory-card row">
        <Link to="/list-items" className="col-md-6" onClick={() => setCurrentCategory('Grocery')}>
          <div className="grocery-icon"></div>
        </Link>
        <Link to="/list-items" className="col-md-6" onClick={() => setCurrentCategory('Meat')}>
          <div className="meat-icon"></div>
        </Link>
        <Link to="/list-items" className="col-md-6" onClick={() => setCurrentCategory('Medicine')}>
          <div className="medicine-icon"></div>
        </Link>
        <a href="#" className="col-md-6">
          <div className="plus-icon"></div>
        </a>
      </div>
    </React.Fragment>
  )
};

export default memo(InventoryCardPanel);
