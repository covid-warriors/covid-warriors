import React, { memo } from 'react';

import Radium from 'radium';
import './style.css';
import BarChart from '../barChart/BarChart';

const InventoryGraphicalPanel = ({ inventory }) => {
  
  return (
    <div className="row graph-panel" style={{ minHeight: '300px' }}>
      {
        inventory.map((n, i) => (
          <div className="col-xl-6" key={i}>
            <div className="card">
              <div className="card-body">
                <h4>{n.category}</h4>
                <BarChart items={n.items} />
              </div>
            </div>
          </div>
        ))
      }
    </div>)
}

export default memo(Radium(InventoryGraphicalPanel));
