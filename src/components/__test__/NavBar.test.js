import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from '../NavBar';

describe('NavBar component', () => {
  test('renders the heading element', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    const headingElement = screen.getByText(/Countries/i);
    expect(headingElement).toBeInTheDocument();
  });

  it('renders the heading element', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    const headingElement = screen.getByRole('navigation');
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the heading element', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    const headingElement = screen.getByRole('link');
    expect(headingElement).toBeInTheDocument();
  });

  test('renders the heading element', () => {
    render(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
    const headingElement = screen.getAllByRole('link');
    expect(headingElement.length).toBe(1);
  });
});
