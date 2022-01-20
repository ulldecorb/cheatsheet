import React from 'react';
import { render, screen } from '@testing-library/react';
import { TestSection } from './index';

describe('when component is render', () => {
  beforeEach(() => render(<TestSection />));
  test('component is render', () => {
    const titleElement = screen.getByText(/test/i);
    expect(titleElement).toBeInTheDocument();
  });
});
