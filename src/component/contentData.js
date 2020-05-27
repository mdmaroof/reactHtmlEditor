import React, { Component, Fragment } from 'react';
import classNames from 'classnames';

class ContentBox extends Component {
  render() {
      const {content} = this.props;


      const bold = content.type.map(x => x === 'b' && ("wrapper--bold"));
      const italic = content.type.map(x => x === 'i' && ("wrapper--italic"));
      const oblique = content.type.map(x => x === 'o' && ("wrapper--oblique"));
      const underline = content.type.map(x => x === 'u' && ("wrapper--underline"));
      const center = content.type.map(x => x === 'C' && ("wrapper--center"))
      const left = content.type.map(x => x === 'L' && ("wrapper--left"))
      const right = content.type.map(x => x === 'R' && ("wrapper--right"))

      const spanValue = content.type.map(x => x === 's' && true);
      const H1Value = content.type.map(x => x === 'H1' && true) ;

      const classnameData = classNames(bold,(italic || oblique),underline,(center || right || left))
    return (

        content.type.map(x => {
            return(
                x === 's' ? <span key={content.id} className={classnameData}> {content.data} </span> :
                x === 'H1' ? <h1 key={content.id} className={classnameData}> {content.data} </h1> :
                x === 'p' ? <p key={content.id} className={classnameData}> {content.data} </p> :
                ''
            )
        })
    );
  }
}

export default ContentBox;