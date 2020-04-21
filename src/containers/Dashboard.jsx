import React, { Component } from 'react';

import SidePanel from '../components/SidePanel';
import InventoryGraphicalPanel from '../components/InventoryGraphicalPanel';
import InventoryCardPanel from '../components/InventoryCardPanel';

const helpAssistantStyle = {
	display: 'none',
	position: 'fixed',
	bottom: '25px',
	right: '25px',
	height: '59px',
	width: '59px',
	borderRadius: '38px',
	backgroundColor: 'aquamarine',
	textAlign: 'center',
	lineHeight: '53px',
	boxShadow: '0px 0px 4px 2px #000',
	cursor: 'pointer'
};

class Dasboard extends Component {

	render = () => {
		return (
			<div id="layoutSidenav">
				<SidePanel />
				<div id="layoutSidenav_content">
					<main>
						<div className="container-fluid">
							<h4 style={{ margin: '8px' }}>Current status</h4>
							<InventoryGraphicalPanel />
							<hr />
							<InventoryCardPanel />
						</div>
					</main>
					<div style={helpAssistantStyle}>HELP</div>
				</div>
			</div>
		);
	}
}

export default Dasboard;
