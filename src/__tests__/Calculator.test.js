import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

describe('Calculator component tests:', () => {
  it('Calculator component renders correctly', () => {
    const tree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Perform an operation and display its result - test addition 16+23 = 39', () => {
    const { container } = render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('3'));
    fireEvent.click(screen.getByText('='));
    const result = container.querySelector('.result').textContent;
    expect(result).toBe('39');
  });

  it('Perform an operation and display its result - test substraction -4-16 = -20', () => {
    const { container } = render(<Calculator />);
    fireEvent.click(screen.getByText('4'));
    fireEvent.click(screen.getByText('+/-'));
    fireEvent.click(screen.getByText('-'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('6'));
    fireEvent.click(screen.getByText('='));
    const result = container.querySelector('.result').textContent;
    expect(result).toBe('-20');
  });

  it('Perform an operation and display its result - test multiplication 9x10 = 90', () => {
    const { container } = render(<Calculator />);
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('×'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('='));
    const result = container.querySelector('.result').textContent;
    expect(result).toBe('90');
  });

  it('Perform an operation and display its result - test devision 100÷2 = 50', () => {
    const { container } = render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('÷'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));
    const result = container.querySelector('.result').textContent;
    expect(result).toBe('50');
  });

  it('Perform an operation and display its result - test devision by zero', () => {
    const { container } = render(<Calculator />);
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('÷'));
    fireEvent.click(screen.getByText('0'));
    fireEvent.click(screen.getByText('='));
    const result = container.querySelector('.result').textContent;
    expect(result).toBe('Can\'t divide by 0.');
  });
});
