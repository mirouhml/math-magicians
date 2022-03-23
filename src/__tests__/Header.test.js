import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/Header';

describe('Header component tests:', () => {
  it('Header component renders correctly', () => {
    const tree = renderer
      .create(<Header />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Checking if the HomePage is the landing page', () => {
    const { container } = render(<Header />);
    const home = container.querySelector('.home');
    expect(home).toBeInTheDocument();
  });

  it('Switching the page then returning to the HomePage', () => {
    const { container } = render(<Header />);
    fireEvent.click(screen.getByText('Calculator'));
    fireEvent.click(screen.getByText('Home'));
    const home = container.querySelector('.home');
    expect(home).toBeInTheDocument();
  });

  it('Clicking on Calculator and getting the CalculatorPage', () => {
    const { container } = render(<Header />);
    fireEvent.click(screen.getByText('Calculator'));
    const page = container.querySelector('.calculator-page');
    expect(page).toBeInTheDocument();
  });

  it('Clicking on Quotes and getting the QuotesPage', () => {
    const { container } = render(<Header />);
    fireEvent.click(screen.getByText('Quotes'));
    const page = container.querySelector('.quotes');
    expect(page).toBeInTheDocument();
  });
});
