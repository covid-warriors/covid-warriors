import React, { memo } from 'react';

const InventoryGraphicalPanel = () => (
  <div className="row">
    <div className="col-xl-6">
      <div className="card mb-4">
        <div className="card-header"><i className="fas fa-chart-bar mr-1"></i>Bar Chart Example</div>
        <div className="card-body"><canvas id="myBarChart" width="100%" height="40"></canvas></div>
      </div>
    </div>
  </div>
);

export default memo(InventoryGraphicalPanel);
