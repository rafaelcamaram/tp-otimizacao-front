import React, { Component } from 'react';
import './DataForm.css';
import { MDBDataTable } from 'mdbreact';

/* Components - presentational - imports */

class DataForm extends Component {
  render() {
    return (
      <div className="DataForm">
        <MDBDataTable striped bordered hover data={this.props.data} />
      </div>
    );
  }
}

export default DataForm;
