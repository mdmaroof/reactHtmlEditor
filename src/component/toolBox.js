import React, { Component, Fragment } from 'react';
import classNames from 'classnames';

class ToolBox extends Component {
    state = {
        classType: 'L',
    }
    changeState = (value) => {
        this.setState({ classType: value })
    }
    render() {
        return (
            <div className="toolbar">
                <span onClick={() => this.changeState('b')} className={classNames("toolbox--block", this.state.classType === 'b' && ('active'))}>B</span>
                <span onClick={() => this.changeState('i')} className={classNames("toolbox--italic", this.state.classType === 'i' && ('active'))}>I</span>
                <span onClick={() => this.changeState('C')} className={classNames("toolbox--center", this.state.classType === 'C' && ('active'))}>C</span>
                <span onClick={() => this.changeState('L')} className={classNames("toolbox--left", this.state.classType === 'L' && ('active'))}>L</span>
                <span onClick={() => this.changeState('R')} className={classNames("toolbox--right", this.state.classType === 'R' && ('active'))}>R</span>
            </div>
        );
    }
}

export default ToolBox;