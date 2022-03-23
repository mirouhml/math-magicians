import React from 'react';
import renderer from 'react-test-renderer';
import { screen, render, fireEvent } from '@testing-library/react';
import Button from '../components/Button';
import '@testing-library/jest-dom';

describe('Button component tests:', () => {
  const buttons = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const onClick = jest.fn();

  it('Button component renders correctly', () => {
    const tree = renderer
      .create(<Button buttons={buttons[0]} action={onClick} last={false} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Button click interaction - test onclick \'+/-\'', () => {
    render(<Button buttons={buttons[0]} action={onClick} last={false} />);
    fireEvent.click(screen.getByText('+/-'));
    fireEvent.click(screen.getByText('+/-'));
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('Button click interaction - test onclick \'9\'', () => {
    render(<Button buttons={buttons[1]} action={onClick} last={false} />);
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('9'));
    expect(onClick).toHaveBeenCalledTimes(3);
  });

  it('Button click interaction - test onclick \'-\'', () => {
    render(<Button buttons={buttons[2]} action={onClick} last={false} />);
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('-'));
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it('Button click interaction - test onclick \'2\'', () => {
    render(<Button buttons={buttons[3]} action={onClick} last={false} />);
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('2'));
    expect(onClick).toHaveBeenCalledTimes(4);
  });

  it('Button click interaction - test onclick \'=\'', () => {
    render(<Button buttons={buttons[4]} action={onClick} last />);
    fireEvent.click(screen.getByText('='));
    fireEvent.click(screen.getByText('='));
    expect(onClick).toHaveBeenCalledTimes(2);
  });
});
