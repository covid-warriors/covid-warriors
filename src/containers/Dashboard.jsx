import React, { Component } from 'react';

import SidePanel from '../components/SidePanel';
import InventoryGraphicalPanel from '../components/InventoryGraphicalPanel';
import InventoryCardPanel from '../components/InventoryCardPanel';
import AppContext from '../AppContext';

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

	static contextType = AppContext;

	postInventoryDetailsInMessage = () => {
		const requestPayload = [];
		this.context.inventoryData.forEach((category, countCat) => {

			category.items.forEach((item, index) => {

				const numberOfDaysConsumed = Math.round((new Date().getTime() - new Date(item.creationDateTime).getTime()) / (1000 * 60 * 60 * 24));

				let currentStock = Math.round(item.stock - (numberOfDaysConsumed * item.unitConsumedPerDay));

				if (currentStock <= 0) {
					currentStock = 0;
				}

				if (currentStock <= item.lowOnStockIndicatingQuantity) {
					requestPayload.push({
						name: item.name
					})
				}
			});
		});

		fetch('https://home-inventory-management.eu-gb.mybluemix.net/v1/message', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestPayload),
		});
	}

	render = () => {
		return (
			<div id="layoutSidenav">
				<SidePanel />
				<div id="layoutSidenav_content">
					<main>
						<div className="container-fluid">
							<h4 style={{ margin: '8px' }}>Inventory Status</h4>
							<InventoryGraphicalPanel />
							<button type="button" className="btn btn-primary btn-sm" onClick={this.postInventoryDetailsInMessage}>Notify Low Stocks</button>
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
