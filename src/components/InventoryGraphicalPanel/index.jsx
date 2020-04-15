import React, { memo } from 'react';

import Radium from 'radium';
import './style.css';
import BarChart from '../barChart/BarChart';

const InventoryGraphicalPanel = () => {

  const aboutToFinishFoodItems = [
    {
      id: 1,
      name: 'Soya',
      unit: 'pack',
      unitsAdded: 10,
      currentStock: 2,
      notifyWhenUnitReaches: 2
    },
    {
      id: 2,
      name: 'Sauce',
      unit: 'pack',
      unitsAdded: 10,
      currentStock: .5,
      notifyWhenUnitReaches: 1
    },
    {
      id: 3,
      name: 'Milk',
      unit: 'pack',
      unitsAdded: 5,
      currentStock: 3,
      notifyWhenUnitReaches: 3
    },
    {
      id: 4,
      name: 'Dal',
      unit: 'kg',
      unitsAdded: 3,
      currentStock: 1,
      notifyWhenUnitReaches: 1
    }
  ];

  const aboutToFinishMedicines = [
    {
      id: 10,
      name: 'Paracetamol',
      unit: 'pack',
      unitsAdded: 10,
      currentStock: 9,
      notifyWhenUnitReaches: 2
    },
    {
      id: 12,
      name: 'Decolic',
      unit: 'pack',
      unitsAdded: 10,
      currentStock: .5,
      notifyWhenUnitReaches: 1
    },
    {
      id: 13,
      name: 'Enteroquinol',
      unit: 'pack',
      unitsAdded: 5,
      currentStock: 3,
      notifyWhenUnitReaches: 3
    },
    {
      id: 14,
      name: 'Pantop DSR',
      unit: 'kg',
      unitsAdded: 20,
      currentStock: 20,
      notifyWhenUnitReaches: 1
    }
  ];

  return (
    <div className="row" style={{ minHeight: '300px' }}>
      <div className="col-xl-6">
        <div className="card">
          <div className="card-body">
            <BarChart items={aboutToFinishFoodItems} />
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card">
          <div className="card-body">
            <BarChart items={aboutToFinishMedicines} />
          </div>
        </div>
      </div>
    </div>)
}

export default memo(Radium(InventoryGraphicalPanel));
