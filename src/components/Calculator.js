/* eslint-disable max-len */

import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './Button';

const Calculator = () => {
  const buttons = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const onClick = (button) => {
    const result = calculate(state, button);
    setState(result);
  };

  const { total, next, operation } = state;
  let buffer = `${total}${operation}${next}`.replace(/null/g, '');
  buffer = buffer.replace(/undefined/g, '');
  return (
    <table>
      <tbody>
        <tr>
          <td className="result" colSpan="4">{buffer}</td>
        </tr>
        <Button buttons={buttons[0]} action={onClick} last={false} />
        <Button buttons={buttons[1]} action={onClick} last={false} />
        <Button buttons={buttons[2]} action={onClick} last={false} />
        <Button buttons={buttons[3]} action={onClick} last={false} />
        <Button buttons={buttons[4]} action={onClick} last />
      </tbody>
    </table>
  );
};

export default Calculator;
