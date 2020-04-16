import React, { Component } from 'react';

import AppContext from "../AppContext";

import SidePanel from '../components/SidePanel';
import InventoryGraphicalPanel from '../components/InventoryGraphicalPanel';
import InventoryCardPanel from '../components/InventoryCardPanel';

class Dasboard extends Component {
	constructor(props) {
		super(props);
	}
	render = () => {
		return (
			<div id="layoutSidenav">
				<SidePanel />
				<div id="layoutSidenav_content">
					<main>
						<div className="container-fluid">
							<h4 className="mt-4">Inventory status</h4>
							<InventoryGraphicalPanel inventory={this.props.context.inventoryData} />
							<InventoryCardPanel />
						</div>
					</main>
				</div>
			</div>
		);
	}
}
const withContext = (Component) => {
	return (props) => (
		<AppContext.Consumer>
			{(context) => {
				return <Component {...props} context={context} />
			}}
		</AppContext.Consumer>
	)
}

export default withContext(Dasboard);
