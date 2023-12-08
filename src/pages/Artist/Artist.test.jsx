import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import Artist from '.';

describe('Artist component', () => {
  render(
    <MemoryRouter>
      <Artist />
    </MemoryRouter>
  );

  it('displays one heading', () => {
    const headings = screen.queryAllByRole('heading', {
      level: 1
    });

    expect(headings.length).toBe(1);
  });
});
