import * as matchers from '@testing-library/jest-dom/matchers';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import NavBar from '.';

expect.extend(matchers);

describe('NavBar component', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );

  it('displays a NavBar with 2 children', () => {
    const nav = screen.getByRole('navigation');

    expect(nav).toBeInTheDocument();
    expect(nav.childNodes.length).toBe(2);
  });

  it('displays NavBar links', () => {
    const links = screen.getAllByRole('link');

    expect(links[0]).toBeInTheDocument();
    expect(links[1]).toBeInTheDocument();
    expect(links[0].childNodes[0].textContent).toBe('Music');
    expect(links[1].childNodes[0].textContent).toBe('Artists');
  });
});
