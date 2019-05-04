import React, { Component } from 'react';
import './DataFormContainer.css';

/* Component - Presentational - imports */
import DeveloperView from '../presentational/DeveloperView/DeveloperView';
import DataForm from '../presentational/DataForm/DataForm';
import ProjectView from '../presentational/ProjectView/ProjectView';

const INITIAL_TECHNOLOGY_LIST = [
  {
    name: 'javascript',
    points: 'zero'
  },
  {
    name: 'java',
    points: 'zero'
  },
  {
    name: 'python',
    points: 'zero'
  },
  {
    name: 'c',
    points: 'zero'
  }
];

const COLUMNS = [
  {
    label: 'Nome',
    field: 'name',
    sort: 'asc',
    width: 250
  },
  {
    label: '0',
    field: 'zero',
    sort: 'asc',
    width: 150
  },
  {
    label: '1',
    field: 'one',
    sort: 'asc',
    width: 150
  },
  {
    label: '2',
    field: 'two',
    sort: 'asc',
    width: 150
  },
  {
    label: '3',
    field: 'three',
    sort: 'asc',
    width: 150
  },
  {
    label: '4',
    field: 'four',
    sort: 'asc',
    width: 150
  },
  {
    label: '5',
    field: 'five',
    sort: 'asc',
    width: 150
  }
];

const PROJECT_COLUMNS = [
  {
    label: 'Tecnologia',
    field: 'technology',
    sort: 'asc',
    width: 250
  },
  {
    label: '0',
    field: 'zero',
    sort: 'asc',
    width: 150
  },
  {
    label: '1',
    field: 'one',
    sort: 'asc',
    width: 150
  },
  {
    label: '2',
    field: 'two',
    sort: 'asc',
    width: 150
  },
  {
    label: '3',
    field: 'three',
    sort: 'asc',
    width: 150
  },
  {
    label: '4',
    field: 'four',
    sort: 'asc',
    width: 150
  },
  {
    label: '5',
    field: 'five',
    sort: 'asc',
    width: 150
  }
];
class DataFormContainer extends Component {
  state = {
    shouldDisplayDeveloperView: true,
    newDeveloper: {
      technologyList: INITIAL_TECHNOLOGY_LIST,
      name: ''
    },
    newProject: {
      name: '',
      technologyList: INITIAL_TECHNOLOGY_LIST
    },
    javascript: {
      columns: COLUMNS,
      rows: []
    },
    java: {
      columns: COLUMNS,
      rows: []
    },
    python: {
      columns: COLUMNS,
      rows: []
    },
    c: {
      columns: COLUMNS,
      rows: []
    },
    projectList: []
  };

  addNewDeveloper() {
    const { name, technologyList } = this.state.newDeveloper;

    if (!name || name.trim().length === 0) {
      alert('Preencha o nome do desenvolvedor');
    } else {
      this.setState(prevState => {
        const newState = {
          newDeveloper: {
            technologyList: [
              {
                name: 'javascript',
                points: 'zero'
              },
              {
                name: 'java',
                points: 'zero'
              },
              {
                name: 'python',
                points: 'zero'
              },
              {
                name: 'c',
                points: 'zero'
              }
            ],
            name: ''
          }
        };

        technologyList.forEach(tech => {
          newState[tech.name] = {
            ...prevState[tech.name],
            rows: [
              ...prevState[tech.name].rows,
              {
                name: name,
                zero: tech.points === 'zero' ? 'X' : '',
                one: tech.points === 'one' ? 'X' : '',
                two: tech.points === 'two' ? 'X' : '',
                three: tech.points === 'three' ? 'X' : '',
                four: tech.points === 'four' ? 'X' : '',
                five: tech.points === 'five' ? 'X' : ''
              }
            ]
          };
        });

        return newState;
      });
    }
  }

  addNewProject() {
    const { name, technologyList } = this.state.newProject;

    if (!name || name.trim().length === 0) {
      alert('Preencha o nome do projeto');
    } else {
      this.setState(prevState => {
        const newState = {
          ...prevState,
          newProject: {
            technologyList: [
              {
                name: 'javascript',
                points: 'zero'
              },
              {
                name: 'java',
                points: 'zero'
              },
              {
                name: 'python',
                points: 'zero'
              },
              {
                name: 'c',
                points: 'zero'
              }
            ],
            name: ''
          }
        };

        console.log('prevState.projectList');
        console.log(prevState.projectList);
        console.log({ name });
        const index = prevState.projectList.findIndex(item => item.projectName === name);
        if (index !== undefined && index !== -1) {
          alert('Projeto já cadastrado');
        } else {
          let newRows = [];
          technologyList.forEach(tech => {
            newRows.push({
              technology: tech.name,
              zero: tech.points === 'zero' ? 'X' : '',
              one: tech.points === 'one' ? 'X' : '',
              two: tech.points === 'two' ? 'X' : '',
              three: tech.points === 'three' ? 'X' : '',
              four: tech.points === 'four' ? 'X' : '',
              five: tech.points === 'five' ? 'X' : ''
            });
          });

          newState.projectList.push({
            projectName: name,
            table: {
              columns: PROJECT_COLUMNS,
              rows: newRows
            }
          });
        }

        return newState;
      });
    }
  }

  _handleNameChange(event, isProject = false) {
    const field = isProject ? 'newProject' : 'newDeveloper';
    this.setState({
      [field]: {
        ...this.state[field],
        name: event.target.value
      }
    });
  }

  _handleTechnologyChange(event) {
    this.setState({
      newDeveloper: {
        ...this.state.newDeveloper,
        technology: event.target.value
      }
    });
  }

  _handlePointChange(event, technology, isProject = false) {
    const field = isProject ? 'newProject' : 'newDeveloper';
    let technologyList = Object.assign(this.state[field].technologyList, []);

    const techIndex = technologyList.findIndex(item => {
      return item.name === technology;
    });

    if (techIndex !== undefined && techIndex !== -1) {
      technologyList[techIndex].points = event.target.value;
    } else {
      technologyList.push({
        name: technology,
        points: event.target.value
      });
    }

    this.setState(
      {
        [field]: {
          ...this.state[field],
          technologyList: technologyList
        }
      },
      () => {
        console.log(this.state[field]);
      }
    );
  }

  _renderProjectTechnologyItem(technology, index) {
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
            value={this.state.newProject ? this.state.newProject.technologyList[index].points : ''}
            onChange={event => this._handlePointChange(event, technology, true)}
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

  render() {
    console.log('state');
    console.log(this.state);
    return (
      <div id="DataFormContainer">
        <div style={{ width: '80%' }}>
          <button
            onClick={() => {
              this.setState({
                shouldDisplayDeveloperView: true
              });
            }}
          >
            Gerenciar Desenvolvedores
          </button>
          <button
            onClick={() => {
              this.setState({
                shouldDisplayDeveloperView: false
              });
            }}
          >
            Gerenciar Projetos
          </button>
          <button onClick={() => {}}>Otimizar</button>
          <br />
          <br />
          <br />
          {this.state.shouldDisplayDeveloperView ? (
            <DeveloperView
              newDeveloper={this.state.newDeveloper}
              handlePointChange={this._handlePointChange.bind(this)}
              addNewDeveloper={this.addNewDeveloper.bind(this)}
              handleNameChange={this._handleNameChange.bind(this)}
              state={this.state}
            />
          ) : (
            <div>
              <h1>Adicionar novo projeto</h1>
              <label>
                Nome do projeto:
                <input
                  type="text"
                  value={this.state.newProject ? this.state.newProject.name : ''}
                  onChange={event => this._handleNameChange(event, true)}
                />
              </label>

              {this._renderProjectTechnologyItem('javascript', 0)}
              {this._renderProjectTechnologyItem('java', 1)}
              {this._renderProjectTechnologyItem('python', 2)}
              {this._renderProjectTechnologyItem('c', 3)}

              <button onClick={this.addNewProject.bind(this)}>Criar Projeto</button>
              <br />
              <br />
              <br />

              {this.state.projectList.map(project => {
                return (
                  <div key={project.projectName}>
                    <h1>{project.projectName}</h1>
                    <DataForm data={project.table} />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default DataFormContainer;
