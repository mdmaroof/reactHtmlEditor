import React, { Component, Fragment } from 'react';
import TextBox from './component/textbox';
import "./style.scss";

class App extends Component {
  render() {
    return (
      <Fragment>
          <TextBox />
      </Fragment>
    );
  }
}

export default App;