import { createContext, useContext, useState } from 'react';

const ArtistContext = createContext(null);

import React from 'react';

export const ArtistProvider = ({ children }) => {
  const [artists, setArtists] = useState([]);
  const [artist, setArtist] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [songs, setSongs] = useState([]);

  return (
    <ArtistContext.Provider
      value={{
        artists,
        setArtists,
        artist,
        setArtist,
        albums,
        setAlbums,
        songs,
        setSongs
      }}
    >
      {children}
    </ArtistContext.Provider>
  );
};

export const useArtist = () => useContext(ArtistContext);
