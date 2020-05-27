import React, { Component, Fragment } from 'react';
import ContentBox from './contentData';

class TextBox extends Component {

    state = {
        content: [
            {
                id: 1,
                type: ['p','b','C'],
                data: 'Hello My name is Maroof',
                level:1
            },
            {
                id: 2,
                type: ['s','L'],
                data: 'Hello My name is',
                level:0,
            },
            {
                id: 3,
                type: ['s','b'],
                data: ' Maroof',
                level:0,
            },
            {
                id: 4,
                type: ['s','L'],
                data: ' . I am from',
                level:0,
            },
            {
                id: 5,
                type: ['s','b'],
                data: ' Lucknow',
                level:0,
            },
            {
                id: 6,
                type: ['s','L'],
                data: ' .',
                level:1,
            },
            {
                id: 7,
                type: ['H1'],
                data: 'New World',
                level:0,
            },
        ]
    }

    render() {
        return (
            <Fragment>
                <div className="wrapper" contentEditable="true" data-editable data-name="main-content">
                    {this.state.content.map((x, i) => {
                        return (
                            <ContentBox key={i} content={x} />
                        )
                    })}
                </div>
            </Fragment>
        );
    }
}

export default TextBox;