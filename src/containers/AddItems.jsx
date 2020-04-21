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
            category: window.selectedCategory || '',
            consumptionTimeframe: '',
            unit: '',
            monthlyUnits: '',
            stock: ''
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

        const { itemName, category, consumptionTimeframe, unit, monthlyUnits, stock } = this.state;
        let initialInventory = this.props.context.inventoryData;
        const itemsInCategoryCurrently = this.context.inventoryData.filter(obj => {
            return obj.category === category
        })[0].items.length;

        const newRow = {
            "id": (itemsInCategoryCurrently - 1),
            "name": itemName,
            "unit": unit,
            "monthlyUnits": monthlyUnits,
            "stock": stock,
            "notifyWhenUnitReaches": 2,
            "consumptionTimeframe": consumptionTimeframe
        };

        var categoryIndex = initialInventory.map(function (e) { return e.category; }).indexOf(category);
        initialInventory[categoryIndex].items.push(newRow);

        this.props.context.updateInventoryData(initialInventory);
        /* this.clearItemsDetails(); */
        this.props.history.push('/list-items');
    }

    render = () => {
        const { itemName, category, consumptionTimeframe, unit, monthlyUnits, stock } = this.state;
        const enableAdd = (itemName && category && consumptionTimeframe && unit && monthlyUnits && stock);
        return (
            <div className="container-fluid add-edit-panel">
                <div className="row">
                    <Link to="/list-items">Go Back...</Link>
                </div>
                <h4 className="mt-4">Add items</h4>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <input type="text" className="form-control" aria-label="Item Name" aria-describedby="inputGroup-sizing-sm" value={itemName} onChange={(e) => this.setState({ 'itemName': e.target.value })} placeholder="Item" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <select className="custom-select mr-sm-2" value={category} onChange={(e) => this.setState({ 'category': e.target.value })}>
                                <option disabled>Choose Category</option>
                                <option value="Grocery" >Grocery</option>
                                <option value="Meat">Meat</option>
                                <option value="Medicine">Medicine</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <select className="custom-select mr-sm-2" value={consumptionTimeframe || "Timeframe"} onChange={(e) => this.setState({ 'consumptionTimeframe': e.target.value })}>
                                <option value="Timeframe" disabled>Consumption Timeframe</option>
                                <option value="Monthly">Monthly</option>
                                <option value="Weekly">Weekly</option>
                            </select>
                        </div>

                        <div className="form-group col-md-4">
                            <input type="text" className="form-control" aria-label="Item consumption amount" aria-describedby="inputGroup-sizing-sm" value={monthlyUnits} onChange={(e) => this.setState({ 'monthlyUnits': (e.target.value).replace(/\D+/g, '') })} placeholder="Consumption amount" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <input type="text" className="form-control" aria-label="Item stock" aria-describedby="inputGroup-sizing-sm" value={stock} onChange={(e) => this.setState({ 'stock': (e.target.value).replace(/\D+/g, '') })} placeholder="Stock" />
                        </div>
                        <div className="form-group col-md-4">
                            <select className="custom-select mr-sm-2" value={unit || "unit"} onChange={(e) => this.setState({ 'unit': e.target.value })}>
                                <option value="unit" disabled>Unit</option>
                                <option value="pack">Pack</option>
                                <option value="ltr">Litre</option>
                                <option value="kg">Kilograms</option>
                                <option value="grm">Grams</option>
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
