import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Genre from '../Genre';
import './style.css';

function ArtistInfoContent() {
  const [artist, setArtist] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getArtist();
  }, []);

  const getArtist = async () => {
    try {
      const url = `https://theaudiodb.com/api/v1/json/2/artist.php?i=${id}`;
      const resp = await fetch(url);
      const artistData = await resp.json();

      setArtist(artistData.artists[0]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <h1 className='artist-name'>{artist.strArtist}</h1>
      <p className='artist-intro'>{artist.strBiographyEN}</p>
      {artist.strGenre ? (
        <div className='artist-genres'>
          <Genre value={artist.strGenre} />
        </div>
      ) : (
        <div className='artist-genres' style={{ display: 'none' }}>
          <Genre value={artist.strGenre} />
        </div>
      )}
    </div>
  );
}

export default ArtistInfoContent;

ArtistInfoContent.propTypes = {
  artist_id: PropTypes.number
};
