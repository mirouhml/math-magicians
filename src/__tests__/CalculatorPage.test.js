import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import CalculatorPage from '../components/CalculatorPage';

describe('CalculatorPage component tests:', () => {
  it('CalculatorPage component renders correctly', () => {
    const tree = renderer
      .create(<CalculatorPage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Check if the title of the page is rendered', () => {
    render(<CalculatorPage />);
    const title = screen.getByText('Let\'s do some math!');
    expect(title).toBeInTheDocument();
  });

  it('Check if the calculator is rendered', () => {
    const { container } = render(<CalculatorPage />);
    const calculator = container.querySelector('.calculator-table');
    expect(calculator).toBeInTheDocument();
  });
});
