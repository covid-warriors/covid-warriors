import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import Grocery from '../../assets/img/grocery.jpg';
import Meat from '../../assets/img/meat.jpg';
import Vegetables from '../../assets/img/vegetables.jpg';
import Medicine from '../../assets/img/medicine.jpg';

const InventoryCardPanel = () => {
  const setCurrentCategory = (category) => {
    window.selectedCategory = category;
  }
  return (
  <div className="row inventory-card">    
    <div className="col-xl-3 col-md-6">
      <div className="card">
        <img className="card-img-top" src={Grocery} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Grocery</h5>
          <p className="card-text">Manage your groceries stock</p>
          <Link to="/add-edit-inventory" onClick={() => setCurrentCategory('grocery')}>Add/ Edit</Link>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-md-6">
      <div className="card">
        <img className="card-img-top" src={Vegetables} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Vegetables</h5>
          <p className="card-text">Manage your vegetables stock</p>
          <Link to="/add-edit-inventory" onClick={() => setCurrentCategory('vegetables')}>Add/ Edit</Link>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-md-6">
      <div className="card">
        <img className="card-img-top" src={Meat} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Meat</h5>
          <p className="card-text">Manage your meat stock</p>
          <Link to="/add-edit-inventory" onClick={() => setCurrentCategory('meat')}>Add/ Edit</Link>
        </div>
      </div>
    </div>
    <div className="col-xl-3 col-md-6">
      <div className="card">
        <img className="card-img-top" src={Medicine} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Medicine</h5>
          <p className="card-text">Manage your medicines stock</p>
          <Link to="/add-edit-inventory" onClick={() => setCurrentCategory('medicine')}>Add/ Edit</Link>
        </div>
      </div>
    </div>
  </div>
)};

export default memo(InventoryCardPanel);
