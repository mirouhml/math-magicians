/* eslint-disable max-len */

import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = [
      ['AC', '+/-', '%', '÷'],
      ['7', '8', '9', '×'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
    ];
  }

  setupCalculator() {
    return this.buttons.map((button) => <tr key={button}>{button.map((cell) => { if (cell === '÷' || cell === '×' || cell === '-' || cell === '+') return <td key={cell} className="operator">{cell}</td>; return <td key={cell}>{cell}</td>; })}</tr>);
  }

  render() {
    return (
      <table>
        <tr>
          <td className="result" colSpan="4">0</td>
        </tr>
        {
          this.setupCalculator()
        }
        <tr>
          <td colSpan="2">0</td>
          <td>.</td>
          <td className="operator">=</td>
        </tr>
      </table>
    );
  }
}

export default Calculator;
