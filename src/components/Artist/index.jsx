import { useEffect, useState } from 'react';
import Genre from '../Genre';

function Artist() {
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    getArtist();
  }, []);

  const getArtist = async () => {
    try {
      const url = 'https://theaudiodb.com/api/v1/json/2/artist.php?i=144041';
      const resp = await fetch(url);
      const artistData = await resp.json();

      setArtist(artistData.artists[0]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1 className='artist-name'>{artist.strArtist}</h1>
      <p className='artist-intro'>{artist.strBiographyEN}</p>

      <div className='artist-genres'>
        <Genre value={artist.strGenre} />
      </div>
    </>
  );
}

export default Artist;
