import React from 'react';

import ReactTooltip from "react-tooltip";

import './BarChart.css';

const BarChart = (props) => {

  const {items} = props;

  const allItems = items.map((item, index) => {

    const divWidth = Math.round((item.currentStock / item.unitsAdded * 100) / 10) * 10;

    const progressClass = [];

    progressClass.push(`progress-bar-item`);

    progressClass.push(`width-${divWidth}`);

    if (divWidth > 0 && divWidth < 33) {
      progressClass.push('red');
    }

    if (divWidth > 33 && divWidth < 66) {
      progressClass.push('amber');
    }

    if (divWidth > 66) {
      progressClass.push('green');
    }
  return (
    <React.Fragment key={index}>
      <div className="name-of-item">{item.name}</div>
      <div data-tip={`${item.currentStock}item(s) available.`} key={index} className="items-parent">
        <div className={progressClass.join(" ")}>
          <div style={{ fontSize: '13px' }}>{divWidth}%</div>
        </div>
      </div>
      <ReactTooltip />
    </React.Fragment>
  );
  });

  return allItems;
}

export default BarChart;