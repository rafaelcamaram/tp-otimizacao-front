import React, { PureComponent } from 'react';
import ReactJson from 'react-json-view';

class JsonViewer extends PureComponent {
  render() {
    return <ReactJson src={this.props.json} />;
  }
}

export default JsonViewer;
