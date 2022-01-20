import React from 'react';
import { render, screen } from '@testing-library/react';
import { HtmlSection } from './index';

describe('when component is render', () => {
  beforeEach(() => render(<HtmlSection />));
  test('component is render', () => {
    const titleElement = screen.getByText(/html/i);
    expect(titleElement).toBeInTheDocument();
  });
});
