import React from 'react';
import { render, screen } from '@testing-library/react';
import { VueSection } from './index';

describe('when component is render', () => {
  beforeEach(() => render(<VueSection />));
  test('component is render', () => {
    const titleElement = screen.getByText(/vue/i);
    expect(titleElement).toBeInTheDocument();
  });
});
