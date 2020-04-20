import React, { memo, useContext } from 'react';

import Radium from 'radium';
import './style.css';
import BarChart from '../barChart/BarChart';
import AppContext from '../../AppContext';

const InventoryGraphicalPanel = () => {

  const { inventoryData } = useContext(AppContext);

  return (
    <div className="row graph-panel" style={{ minHeight: '300px' }}>
      {
        inventoryData.map((inventory, i) => (
          <div className="col-xl-6" key={i}>
            <div className="card">
              <div className="card-body" style={{ padding: '6px 13px' }}>
                <h6>{inventory.category}</h6>
                <BarChart items={inventory.items} />
              </div>
            </div>
          </div>
        ))
      }
    </div>)
}

export default memo(Radium(InventoryGraphicalPanel));
