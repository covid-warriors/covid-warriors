import React from 'react';

import ReactTooltip from "react-tooltip";

import './BarChart.css';

const BarChart = (props) => {

  const { items } = props;

  const allItems = items.map((item, index) => {

    const numberOfDaysConsumed = Math.round((new Date().getTime() - new Date(item.creationDateTime).getTime()) / (1000 * 60 * 60 * 24));

    let currentStock = Math.round(item.stock - (numberOfDaysConsumed * item.unitConsumedPerDay));

    if (currentStock <= 0) {
      currentStock = 0;
    }

    const currentStockQuantityInPercentage = Math.round((currentStock / item.stock * 100) / 10) * 10;

    const progressClass = [];

    progressClass.push(`progress-bar-item`);

    progressClass.push(`width-${currentStockQuantityInPercentage}`);

    if (currentStock <= item.lowOnStockIndicatingQuantity) {
      progressClass.push('red');
    } else {

      if (currentStockQuantityInPercentage > 0 && currentStockQuantityInPercentage < 66) {
        progressClass.push('amber');
      }

      if (currentStockQuantityInPercentage >= 66) {
        progressClass.push('green');
      }
    }
    return (
      <div style={{ display: 'flex' }} className="label-and-bar-wrapper" key={index}>
        <div className="name-of-item">{item.name}</div>
        <div data-tip={`${currentStock} ${item.unit}(s) in stock, ${numberOfDaysConsumed * item.unitConsumedPerDay} ${item.unit}(s) consumed`} key={index} className="items-parent">
          <div className={progressClass.join(" ")}></div>
        </div>
        <ReactTooltip />
      </div>
    );
  });

  return allItems;
}

export default BarChart;