import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';

const Artists = () => {
  const [artists, setArtists] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getArtists();
  }, []);

  const getArtists = () => {
    const artistsArr = [114390, 152752, 111718, 144041, 153610, 111822];
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
          <div className='artist-card' key={i}>
            <img
              className='artist-img'
              src={a.strArtistThumb}
              alt={a.strArtist}
              onClick={() => navigate(`/artists/${a.idArtist}`)}
            />
            <div className='artist-name'>{a.strArtist}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
