import React, { Component, Fragment } from 'react';
import TextBox from './component/textbox';
import "./style.scss";
import ToolBox from './component/toolBox';

class App extends Component {
  render() {
    return (
      // test
      <Fragment>
          <ToolBox />
          <TextBox />
      </Fragment>
    );
  }
}

export default App;