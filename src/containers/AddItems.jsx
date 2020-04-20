import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppContext from "../AppContext";
import './AddEditInventory.css';

class AddEditInventory extends Component {

    static contextType = AppContext;

    constructor(props, context) {
        super(props, context);
        this.state = {
            name: '',
            category: window.selectedCategory || '',
            consumptionTimeframe: '',
            unit: '',
            monthlyUnits: '',
            stock: '',
            items: this.context.inventoryData.filter(obj => {
                return obj.category === window.selectedCategory
            })[0].items,
            addEnable: false
        };
    }

    addNewRow = () => {
        const newRow = {
            "id": Math.random(),
            "name": "",
            "unit": "",
            "monthlyUnits": 0,
            "stock": 0,
            "notifyWhenUnitReaches": 0
        };
        this.setState(prevState => ({
            items: [...prevState.items, newRow]
        }));
    }

    deleteRow = (rowIndex) => {
        const updatedArray = [...this.state.items];
        updatedArray.splice(rowIndex, 1);
        this.setState({ items: updatedArray, addEnable: true });
    }

    editData = (field, index, fieldValue) => {
        this.setState(prevState => {
            const newItems = [...prevState.items];
            newItems[index][field] = fieldValue;
            return { items: newItems, addEnable: true };
        })
    }

    onSubmitHandle = () => {
        let initialInventory = this.props.context.inventoryData;


        var replacement = { "category": window.selectedCategory, "items": this.state.items };
        initialInventory = initialInventory.map(function (elt) {
            return elt.category === window.selectedCategory ? replacement : elt;
        });

        this.props.context.updateInventoryData(initialInventory);
        this.setState({ addEnable: false });
    }

    render = () => {
        console.log(this.context);
        const { items, addEnable, name, category, consumptionTimeframe, unit, monthlyUnits, stock } = this.state;
        return (
            <div className="container-fluid add-edit-panel">
                <div className="row">
                    <Link to="/add-edit-inventory">Go Back...</Link>
                </div>
                <h4 className="mt-4">Add items</h4>
                <form>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <input type="text" className="form-control" aria-label="Item Name" aria-describedby="inputGroup-sizing-sm" value={name} onChange={(e) => this.setState({ 'name': e.target.value }) } placeholder="Item" />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <select className="custom-select mr-sm-2">
                                <option disabled value={category} onChange={(e) => this.setState({ 'category': e.target.value }) } >Choose Category</option>
                                <option value="Grocery" >Grocery</option>
                                <option value="Meat">Meat</option>
                                <option value="Medicine">Medicine</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <select className="custom-select mr-sm-2">
                                <option selected disabled value={consumptionTimeframe} onChange={(e) => this.setState({ 'consumptionTimeframe': e.target.value }) }>Consumption Timeframe</option>
                                <option value="monthly">Monthly</option>
                                <option value="weekly">Weekly</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <input type="number" className="form-control" aria-label="Item stock" aria-describedby="inputGroup-sizing-sm" value={stock} onChange={(e) => this.setState({ 'stock': e.target.value }) } placeholder="Stock" />
                        </div>
                        <div className="form-group col-md-4">
                            <select className="custom-select mr-sm-2">
                                <option selected disabled value={unit} onChange={(e) => this.setState({ 'unit': e.target.value }) }>Unit</option>
                                <option value="pack">Pack</option>
                                <option value="ltr">Litre</option>
                                <option value="kg">Kilograms</option>
                                <option value="grm">Grams</option>
                            </select>
                        </div>
                        <div className="form-group col-md-4">
                            <input type="number" className="form-control" aria-label="Item consumption amount" aria-describedby="inputGroup-sizing-sm" value={monthlyUnits} onChange={(e) => this.setState({ 'monthlyUnits': e.target.value }) } placeholder="Monthly comsumption amount" />
                        </div>
                    </div>
                    <button
                        type="button"
                        className={`add-button btn ${addEnable ? 'btn-success' : 'btn-secondary'} btn-sm`}
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
