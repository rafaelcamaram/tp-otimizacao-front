import React, { Component } from 'react';

/* Components - Containers - imports */
import DataFormContainer from './components/container/DataFormContainer';

class App extends Component {
  render() {
    return (
      <div id="App">
        <header className="DataForm-header">
          <h2>Trabalho de Otimização de Sistemas</h2>
          <div style={{ width: '60%' }}>
            <p>
              Esta entrega consiste basicamente em uma aplicação cujo frontend foi desenvolvido utilizando{' '}
              <strong>React.JS</strong> e o backend em <strong>Node.JS</strong>.
            </p>
            <p>
              A aplicação atualmente consiste de um <i>preview</i> do trabalho final aonde estamos realizando uma
              chamada teste utilizando o <strong>glpk</strong>. Temos basicamente duas colunas. A primeira (esquerda)
              seria um exemplo de <i>request</i> que estamos realizando para o nosso servidor e a segunda coluna
              (direita) seria o retorno do mesmo.
            </p>
          </div>
        </header>
        <DataFormContainer />
      </div>
    );
  }
}

export default App;
