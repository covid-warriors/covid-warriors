import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppContext from "../AppContext";
import './AddEditInventory.css';

class AddEditInventory extends Component {

	static contextType = AppContext;

	constructor(props, context) {
		super(props, context);
		this.state = {
			itemName: '',
			unit: '',
			stock: '',
			category: window.selectedCategory || '',
			notificationInterval: 0,
			unitConsumedPerDay: 0,
			lowOnStockIndicatingQuantity: 0
		};
	}

	/* clearItemsDetails = () => {
			this.setState({
					itemName: '',
					category: window.selectedCategory || '',
					consumptionTimeframe: '',
					unit: '',
					monthlyUnits: '',
					stock: ''
			});
	} */

	onSubmitHandle = () => {
		console.log(this.state);

		const { itemName, category, unit, stock, notificationInterval, unitConsumedPerDay, lowOnStockIndicatingQuantity } = this.state;
		const shouldAdd = (itemName && category && notificationInterval && unit && unitConsumedPerDay && stock && lowOnStockIndicatingQuantity);
		if (!shouldAdd) {
			return;
		}
		let initialInventory = this.props.context.inventoryData;
		/* const itemsInCategoryCurrently = this.context.inventoryData.filter(obj => {
			return obj.category === category
		})[0].items.length; */

		const newRow = {
			id: Math.round(Math.random(99999999999999) * 100000),
			name: itemName,
			unit,
			stock,
			notificationInterval,
			unitConsumedPerDay,
			lowOnStockIndicatingQuantity,
			creationDateTime: new Date().getTime(),
		};

		var categoryIndex = initialInventory.map(function (e) { return e.category; }).indexOf(category);
		initialInventory[categoryIndex].items.push(newRow);

		this.props.context.updateInventoryData(initialInventory);
		this.props.history.push('/list-items');
	}

	render = () => {
		const { itemName, category, unit, stock, notificationInterval, unitConsumedPerDay, lowOnStockIndicatingQuantity } = this.state;
		const enableAdd = (itemName && category && notificationInterval && unit && unitConsumedPerDay && stock && lowOnStockIndicatingQuantity);
		return (
			<div className="container-fluid add-edit-panel">
				<div className="row">
					<Link to="/list-items">Go Back...</Link>
				</div>
				<h4 className="mt-4">Add items</h4>
				<form>
					<div className="form-row">
						<div className="form-group col-md-12">
							<input type="text" className="form-control" aria-label="Item Name" aria-describedby="inputGroup-sizing-sm" value={itemName} onChange={(e) => this.setState({ 'itemName': e.target.value })} placeholder="Item Name" />
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-md-4">
							<select className="custom-select mr-sm-2" value={unit || "unit"} onChange={(e) => this.setState({ 'unit': e.target.value })}>
								<option value="unit" disabled>Unit</option>
								<option value="pack">Pack</option>
								<option value="ltr">Litre</option>
								<option value="kg">Kilograms</option>
								<option value="grm">Grams</option>
								<option value="pc">Piece</option>
							</select>
						</div>
						<div className="form-group col-md-4">
							<input type="number" className="form-control" aria-label="Item stock" aria-describedby="inputGroup-sizing-sm" value={stock} onChange={(e) => this.setState({ 'stock': (e.target.value).replace(/\D+/g, '') })} placeholder="Quantity In Stock" />
						</div>
						<div className="form-group col-md-6">
							<input type="number" className="form-control" aria-label="Notification Interval" aria-describedby="inputGroup-sizing-sm" onChange={(e) => this.setState({ 'notificationInterval': e.target.value })} placeholder="Choose Notification Interval (days)" />
						</div>
						<div className="form-group col-md-6">
							<input type="number" className="form-control" aria-label="Daily consumption" aria-describedby="inputGroup-sizing-sm" onChange={(e) => this.setState({ 'unitConsumedPerDay': e.target.value })} placeholder="Daily Consumption" />
						</div>
						<div className="form-group col-md-6">
							<input type="number" className="form-control" aria-label="Set quantity for low on stock" aria-describedby="inputGroup-sizing-sm" onChange={(e) => this.setState({ 'lowOnStockIndicatingQuantity': e.target.value })} placeholder="Set Quantity For Low On Stock" />
						</div>
						<div className="form-group col-md-6">
							<select className="custom-select mr-sm-2" value={category} onChange={(e) => this.setState({ 'category': e.target.value })}>
								<option disabled>Choose Category</option>
								<option value="Grocery" >Grocery</option>
								<option value="Meat">Meat</option>
								<option value="Medicine">Medicine</option>
							</select>
						</div>
					</div>
					
					<button
						type="button"
						className={`add-button btn ${enableAdd ? 'btn-success' : 'btn-secondary'} btn-sm`}
						onClick={this.onSubmitHandle}
					>
						Add
                        </button>
				</form>
			</div >
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

export default withContext(AddEditInventory);
