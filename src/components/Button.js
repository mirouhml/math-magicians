/* eslint-disable react/prop-types */

import React from 'react';

export default class Button extends React.PureComponent {
  render = () => {
    const { buttons, action, last } = this.props;
    const row = buttons.map((cell, index) => {
      if (last) {
        if (index === 0) return <td key={cell} colSpan="2"><button type="button" onClick={() => action(cell)}>{cell}</button></td>;
        if (index === 2) return <td key={cell}><button className="operator" type="button" onClick={() => action(cell)}>{cell}</button></td>;
        return <td key={cell}><button type="button" onClick={() => action(cell)}>{cell}</button></td>;
      }
      if (index === 3) return <td key={cell}><button className="operator" type="button" onClick={() => action(cell)}>{cell}</button></td>;
      return <td key={cell}><button type="button" onClick={() => action(cell)}>{cell}</button></td>;
    });
    return <tr>{row}</tr>;
  };
}
