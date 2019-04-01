import React, { Component } from 'react';
import './DataFormContainer.css';

/* Component - Presentational - imports */
import DataForm from '../presentational/DataForm/DataForm';
import JsonViewer from '../presentational/JsonViewer/JsonViewer';

/* Config imports */
import CONSTANTS from '../../config/constants';

class DataFormContainer extends Component {
  state = {
    options: {
      name: 'LP',
      objective: {
        name: 'obj',
        vars: [{ name: 'x1', coef: 0.6 }, { name: 'x2', coef: 0.5 }]
      },
      subjectTo: [
        {
          name: 'cons1',
          vars: [{ name: 'x1', coef: 1.0 }, { name: 'x2', coef: 2.0 }],
          bnds: { ub: 1.0, lb: 0.0 }
        },
        {
          name: 'cons2',
          vars: [{ name: 'x1', coef: 3.0 }, { name: 'x2', coef: 1.0 }],
          bnds: { ub: 2.0, lb: 0.0 }
        }
      ]
    },
    result: {}
  };

  requestResult() {
    this.setState({ isLoading: true }, () => {
      setTimeout(() => {
        fetch(`${CONSTANTS.URL_HOST}/result`, {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'GET'
        })
          .then(response => {
            return response.json();
          })
          .then(responseJson => {
            this.setState({
              result: responseJson,
              isLoading: false
            });
          })
          .catch({
            isLoading: false
          });
      }, 500);
    });
  }

  render() {
    return (
      <div id="DataFormContainer">
        <div style={{ width: '80%' }}>
          <DataForm
            key="presentational-data-form"
            className="json-input"
            options={this.state.options}
            result={this.state.result}
            isLoading={this.state.isLoading}
            requestResult={this.requestResult.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default DataFormContainer;
