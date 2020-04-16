import React, { Component } from 'react';

class AddEditInventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x: [
                {
                    "item": "eggs",
                    "monthly": "25",
                    "stock": "30"
                },
                {
                    "item": "pulses",
                    "monthly": "25",
                    "stock": "30"
                }
            ]
        };
    }

    addNewRow = () => {
        const newRow = {
            "item": "",
            "monthly": "",
            "stock": ""
        };
        this.setState(prevState => ({
            x: [...prevState.x, newRow]
        }));
    }

    deleteRow = (rowIndex) => {
        const updatedArray = [...this.state.x];
        updatedArray.splice(rowIndex, 1);
        this.setState({ x: updatedArray });
    }

    editData = (field, index, fieldValue) => {
        this.setState(prevState => {
            const newItems = [...prevState.x];
            newItems[index][field] = fieldValue;
            return { x: newItems };
        })
    }

    render = () => {
        const { x } = this.state;
        return (
            <div className="container-fluid add-edit-panel">
                <div className="row">
                    <a className="nav-link" href="/dashboard"> Go Back</a>
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
                                x.map((n, i) => {
                                    return (
                                        <tr key={i}>
                                            <th scope="row">{i + 1}</th>
                                            <td><input type="text" className="form-control" aria-label="Item Name" aria-describedby="inputGroup-sizing-sm" value={n.item} onChange={(e) => this.editData('item', i, e.target.value)} /></td>
                                            <td><input type="text" className="form-control" aria-label="Item monthly usage" aria-describedby="inputGroup-sizing-sm" value={n.monthly} onChange={() => this.editData('monthly', i)} /></td>
                                            <td><input type="text" className="form-control" aria-label="Item in Stock" aria-describedby="inputGroup-sizing-sm" value={n.stock} onChange={() => this.editData('stock', i)} /></td>
                                            <td>
                                                {(i === x.length - 1) && (
                                                    <button
                                                        type="button"
                                                        className="btn btn-success"
                                                        onClick={this.addNewRow}
                                                    >
                                                        <i className="fas fa-plus" />
                                                    </button>
                                                )}
                                                <button type="button" className="btn btn btn-danger" onClick={() => this.deleteRow(i)}>
                                                    <i className="far fa-trash-alt" />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>

                <div className="row">
                    How often do you want the notification? <button type="button" class="btn btn-primary btn-sm">Weekly</button> <button type="button" class="btn btn-primary btn-sm">Monthly</button>
                </div>
            </div>

        );
    }
}

export default AddEditInventory;
