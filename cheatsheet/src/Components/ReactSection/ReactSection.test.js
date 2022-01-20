import React from 'react';
import { render, screen } from '@testing-library/react';
import { ReactSection } from './index';

describe('when component is render', () => {
  beforeEach(() => render(<ReactSection />));
  test('component is render', () => {
    const titleElement = screen.getByText(/react/i);
    expect(titleElement).toBeInTheDocument();
  });
});
