import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Genre from '../Genre';

function Artist({ artist_id }) {
  const [artist, setArtist] = useState([]);

  useEffect(() => {
    getArtist();
  }, []);

  const getArtist = async () => {
    try {
      const url = `https://theaudiodb.com/api/v1/json/2/artist.php?i=${artist_id}`;
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

Artist.propTypes = {
  artist_id: PropTypes.number
};
