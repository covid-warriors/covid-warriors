import React from 'react';

import ReactTooltip from "react-tooltip";

import './BarChart.css';

const BarChart = (props) => {

  const {items} = props;

  const allItems = items.map((item, index) => {

    const divWidth = Math.round((item.stock / item.monthlyUnits * 100) / 10) * 10;

    const progressClass = [];

    progressClass.push(`progress-bar-item`);

    progressClass.push(`width-${divWidth}`);

    if (divWidth > 0 && divWidth < 20) {
      progressClass.push('red');
    }

    if (divWidth >= 20 && divWidth < 66) {
      progressClass.push('amber');
    }

    if (divWidth >= 66) {
      progressClass.push('green');
    }
  return (
    <div style={{display: 'flex'}} className="label-and-bar-wrapper" key={index}>
      <div className="name-of-item">{item.name}</div>
      <div data-tip={`${item.stock} item(s) in stock, ${item.monthlyUnits - item.stock} item(s) consumed`} key={index} className="items-parent">
        <div className={progressClass.join(" ")}></div>
      </div>
      <ReactTooltip />
    </div>
  );
  });

  return allItems;
}

export default BarChart;