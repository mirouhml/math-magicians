import React from 'react';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    Object.assign(this, this.props);
  }

  render = () => {
    const row = this.buttons.map((cell, index) => {
      if (this.last) {
        if (index === 0) return <td key={cell} colSpan="2"><button type="button" onClick={() => this.action(cell)}>{cell}</button></td>;
        if (index === 2) return <td key={cell}><button className="operator" type="button" onClick={() => this.action(cell)}>{cell}</button></td>;
        return <td key={cell}><button type="button" onClick={() => this.action(cell)}>{cell}</button></td>;
      }
      if (index === 3) return <td key={cell}><button className="operator" type="button" onClick={() => this.action(cell)}>{cell}</button></td>;
      return <td key={cell}><button type="button" onClick={() => this.action(cell)}>{cell}</button></td>;
    });
    return <tr>{row}</tr>;
  };
}
