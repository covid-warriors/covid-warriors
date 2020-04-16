import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import AppContext from "../AppContext";
import './AddEditInventory.css';

class AddEditInventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: this.props.context.inventoryData.filter(obj => {
                return obj.category === window.selectedCategory
            })[0].items,
            modified: false
        };
    }

    addNewRow = () => {
        const newRow = {
            "id": 1,
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
        this.setState({ items: updatedArray, modified: true });
    }

    editData = (field, index, fieldValue) => {
        this.setState(prevState => {
            const newItems = [...prevState.items];
            newItems[index][field] = fieldValue;
            return { items: newItems, modified: true };
        })
    }

    onSubmitHandle = () => {
        let initialInventory = this.props.context.inventoryData;


        var replacement = { "category": window.selectedCategory, "items": this.state.items };
        initialInventory = initialInventory.map(function (elt) {
            return elt.category === window.selectedCategory ? replacement : elt;
        });

        this.props.context.updateInventoryData(initialInventory);
        this.setState({ modified: false });
    }

    render = () => {
        const { items, modified } = this.state;
        return (
            <div className="container-fluid add-edit-panel">
                <div className="row">
                    <Link to="/dashboard">Click Here</Link>
                </div>
                <h4 className="mt-4">Add/ Edit the inventories</h4>
                <div className="row">
                    <table className="table table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Item</th>
                                <th scope="col">Monthly consumption (kg)</th>
                                <th scope="col">Current Stock (kg)</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                items.map((n, i) => (
                                    <tr key={i}>
                                        <th scope="row">{i + 1}</th>
                                        <td><input type="text" className="form-control" aria-label="Item Name" aria-describedby="inputGroup-sizing-sm" value={n.name} onChange={(e) => this.editData('name', i, e.target.value)} /></td>
                                        <td><input type="number" className="form-control" aria-label="Item monthly usage" aria-describedby="inputGroup-sizing-sm" value={n.monthlyUnits} onChange={(e) => this.editData('monthlyUnits', i, e.target.value)} /></td>
                                        <td><input type="number" className="form-control" aria-label="Item in Stock" aria-describedby="inputGroup-sizing-sm" value={n.stock} onChange={(e) => this.editData('stock', i, e.target.value)} /></td>
                                        <td>
                                            {(i === items.length - 1) && (
                                                <button
                                                    type="button"
                                                    className="btn btn-success btn-sm"
                                                    onClick={this.addNewRow}
                                                >
                                                    <i className="fas fa-plus" />
                                                </button>
                                            )}
                                            <button type="button" className="btn btn btn-danger btn-sm" onClick={() => this.deleteRow(i)}>
                                                <i className="far fa-trash-alt" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>

                <div className="row">
                    How often do you want the notification? <button type="button" className="btn btn-primary btn-sm">Weekly</button> <button type="button" className="btn btn-primary btn-sm">Monthly</button>
                </div>
                <div className="row">
                    <button
                        type="button"
                        className={`submit-button btn ${modified ? 'btn-success' : 'btn-secondary'} btn-sm`}
                        onClick={this.onSubmitHandle}
                    >
                        Submit
                        </button>
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

export default withContext(AddEditInventory);
