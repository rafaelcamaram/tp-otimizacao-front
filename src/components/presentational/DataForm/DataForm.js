import React, { Component } from 'react';
import './DataForm.css';

/* Components - presentational - imports */
import JsonViewer from '../JsonViewer/JsonViewer';

class DataForm extends Component {
  state = {
    value: ''
  };

  _handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  _handleSubmit = event => {
    event.preventDefault();
    this.props.requestResult();
  };

  render() {
    return (
      <div className="DataForm">
        <button onClick={this._handleSubmit.bind(this)}>Obter resultado</button>

        <div className="preview">
          <div className="json-input">
            <h3>Parâmetros de entrada</h3>
            <JsonViewer json={this.props.options} />
          </div>
          <div className="json-input">
            <h3>Resultado</h3>

            {this.props.isLoading ? <p>Carregando... </p> : <JsonViewer json={this.props.result} />}
          </div>
        </div>
      </div>
    );
  }
}

export default DataForm;
