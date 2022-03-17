/* eslint-disable max-len */

import React from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.buttons = [
      ['AC', '+/-', '%', '÷'],
      ['7', '8', '9', '×'],
      ['4', '5', '6', '-'],
      ['1', '2', '3', '+'],
      ['0', '.', '='],
    ];
    this.state = {};
  }

  componentDidMount() {
    this.setState = ({
      total: 0,
      next: null,
      operation: null,
    });
  }

  onClick(button) {
    const state = calculate(this.state, button);
    this.setState = state;
  }

  render() {
    return (
      <table>
        <tr>
          <td className="result" colSpan="4">0</td>
        </tr>
        <Button buttons={this.buttons[0]} action={this.onClick} last={false} />
        <Button buttons={this.buttons[1]} action={this.onClick} last={false} />
        <Button buttons={this.buttons[2]} action={this.onClick} last={false} />
        <Button buttons={this.buttons[3]} action={this.onClick} last={false} />
        <Button buttons={this.buttons[4]} action={this.onClick} last />
      </table>
    );
  }
}

export default Calculator;
