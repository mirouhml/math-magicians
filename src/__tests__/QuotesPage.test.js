import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import QuotesPage from '../components/QuotesPage';

describe('QuotesPage component tests:', () => {
  it('QuotesPage component renders correctly', () => {
    const tree = renderer
      .create(<QuotesPage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Check if the title of the page is rendered', () => {
    render(<QuotesPage />);
    const title = screen.getByText('Quotes');
    expect(title).toBeInTheDocument();
  });

  it('Check that there are 10 quotes in the page', () => {
    const { container } = render(<QuotesPage />);
    const numberOfParagraphs = container.querySelectorAll('li').length;
    expect(numberOfParagraphs).toBe(10);
  });
});
