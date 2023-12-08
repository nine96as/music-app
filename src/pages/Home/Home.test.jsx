import * as matchers from '@testing-library/jest-dom/matchers';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Home from '.';

expect.extend(matchers);

describe('Home component', () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  it('should display a heading with appropriate text', () => {
    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
    expect(heading.childNodes[0].textContent).toBe('Browse through ');
    expect(heading.childNodes[1].textContent).toBe('trending');
    expect(heading.childNodes[2].textContent).toBe(' artists.');
  });

  it('should display a button with appropriate text', async () => {
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button.childNodes[0].textContent).toBe('View artists');
  });
});
