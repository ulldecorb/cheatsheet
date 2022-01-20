import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('when render App', () => {
  beforeEach(() => render(<App />));
  test('renders web title', () => {
    const titleElement = screen.getByText(/cheatsheet/i);
    expect(titleElement).toBeInTheDocument();
  });
  test('renders nav', () => {
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  });
  test('render search input', () => {
    const searchInput = screen.getByPlaceholderText(/search/i);
    expect(searchInput).toBeInTheDocument();
  });
});
