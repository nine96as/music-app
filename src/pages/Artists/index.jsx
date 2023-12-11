import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useArtist } from '../../contexts';
import './style.css';

const Artists = () => {
  const { artists, setArtists } = useArtist();

  useEffect(() => {
    getArtists();
  }, []);

  const getArtists = () => {
    const artistsArr = [
      114390, 152752, 111718, 144041, 153610, 111822, 151915, 147724, 146511
    ];
    artistsArr.map(async (a) => {
      let { data } = await axios.get(
        `https://theaudiodb.com/api/v1/json/2/artist.php?i=${a}`
      );
      setArtists((prev) => [...prev, data.artists[0]]);
    });
  };

  return (
    <main className='artists' role='main'>
      <h1 role='heading'>Artists</h1>
      <div className='artists-container'>
        {artists.map((a) => (
          <Link
            to={`/artists/${a.idArtist}`}
            key={a.idArtist}
            role='listitem'
            aria-aria-label={`go to ${a.strArtist}'s page`}
          >
            <div className='artist-card'>
              <img
                className='artist-img'
                src={a.strArtistThumb}
                alt={a.strArtist}
              />
              <div className='artist-name'>{a.strArtist}</div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Artists;
