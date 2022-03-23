import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import HomePage from '../components/HomePage';

describe('HomePage component tests:', () => {
  it('HomePage component renders correctly', () => {
    const tree = renderer
      .create(<HomePage />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Check if the title of the page is rendered', () => {
    render(<HomePage />);
    const title = screen.getByText('Welcome to our page!');
    expect(title).toBeInTheDocument();
  });

  it('Check that there are 2 paragraphs in the page', () => {
    const { container } = render(<HomePage />);
    const numberOfParagraphs = container.querySelectorAll('p').length;
    expect(numberOfParagraphs).toBe(2);
  });
});
