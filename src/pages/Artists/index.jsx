import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Artists = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    getArtists();
  }, []);

  const getArtists = () => {
    const artistsArr = [
      114390, 152752, 111718, 144041, 153610, 111822, 151915, 147724, 146511
    ];
    artistsArr.map(async (a) => {
      let resp = await axios.get(
        `https://theaudiodb.com/api/v1/json/2/artist.php?i=${a}`
      );
      setArtists((prev) => [...prev, resp.data.artists[0]]);
    });
  };

  return (
    <div className='artists'>
      <h1>Artists</h1>
      <div className='artists-container'>
        {artists.map((a, i) => (
          <Link
            to={`/artists/${a.idArtist}`}
            key={i}
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
    </div>
  );
};

export default Artists;
