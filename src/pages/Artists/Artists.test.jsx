import * as matchers from '@testing-library/jest-dom/matchers';
import { cleanup, render, screen } from '@testing-library/react';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import Artists from '.';

expect.extend(matchers);

describe('Artists component', () => {
  render(
    <MemoryRouter>
      <Artists />
    </MemoryRouter>
  );

  it('should display a heading with appropriate text', () => {
    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
    expect(heading.childNodes[0].textContent).toBe('Artists');
  });

  it('should display a main section with 2 children', () => {
    const main = screen.getByRole('main');

    expect(main).toBeInTheDocument();
    expect(main.childNodes.length).toBe(2);
  });

  it('displays one artist if the API returns only one artist', async () => {
    cleanup();
    vi.spyOn(axios, 'get').mockResolvedValueOnce({
      data: {
        artists: [
          {
            idArtist: '144041',
            strArtist: 'Travis Scott',
            strArtistThumb:
              'https://www.theaudiodb.com/images/media/artist/thumb/rwpsqu1501838143.jpg'
          }
        ]
      }
    });
    render(
      <MemoryRouter>
        <Artists />
      </MemoryRouter>
    );

    const artists = await screen.findByRole('listitem');
    expect(artists.childNodes.length).toBe(1);
    expect(artists.childNodes[0].childNodes[1].textContent).toBe(
      'Travis Scott'
    );
  });
});
