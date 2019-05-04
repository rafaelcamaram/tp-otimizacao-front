import React, { Component } from 'react';

/* Component - Presentational - imports */
import DataForm from '../DataForm/DataForm';

/* Config imports */

class DeveloperView extends Component {
  renderTechnologyItem(technology, index) {
    return (
      <div>
        <label>
          Tecnologia:
          <select value={technology} onChange={() => {}} style={{ marginLeft: 5 }}>
            <option value={technology}>{technology}</option>
          </select>
        </label>

        <label style={{ marginLeft: 20 }}>
          Nível:
          <select
            style={{ marginLeft: 5 }}
            value={this.props.newDeveloper ? this.props.newDeveloper.technologyList[index].points : ''}
            onChange={event => this.props.handlePointChange(event, technology)}
          >
            <option value="zero">0</option>
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
            <option value="four">4</option>
            <option value="five">5</option>
          </select>
        </label>
      </div>
    );
  }

  _renderTable(label, field) {
    return (
      <div>
        <h1>{label}</h1>
        <DataForm
          key="javascript-presentational-data-form"
          technology={field}
          data={this.props.state[field]}
          addNewDeveloper={this.props.addNewDeveloper}
        />
      </div>
    );
  }
  render() {
    return (
      <div>
        <h1>Adicionar novo desenvolvedor</h1>
        <label>
          Nome:
          <input
            type="text"
            value={this.props.newDeveloper ? this.props.newDeveloper.name : ''}
            onChange={this.props.handleNameChange}
          />
        </label>

        {this.renderTechnologyItem('javascript', 0)}
        {this.renderTechnologyItem('java', 1)}
        {this.renderTechnologyItem('python', 2)}
        {this.renderTechnologyItem('c', 3)}

        <button onClick={this.props.addNewDeveloper}>Criar Desenvolvedor</button>
        <br />
        <br />
        <br />

        {this._renderTable('JavaScript', 'javascript')}
        {this._renderTable('Java', 'java')}
        {this._renderTable('Python', 'python')}
        {this._renderTable('C', 'c')}
      </div>
    );
  }
}

export default DeveloperView;
