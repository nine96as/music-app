import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { data } from '../../assets/data';
import Genre from '../Genre';

function Artist({ artist_id }) {
  const [name, setName] = useState('');
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    getArtistName();
    getArtistGenres();
  }, []);

  const getArtistName = async () => {
    try {
      const url = `https://api.musixmatch.com/ws/1.1/artist.get?artist_mbid=e4a51f17-a57b-47b1-b37b-f552d0f8e9e6&apikey=${
        import.meta.env.VITE_API_KEY
      }`;
      const resp = await fetch(url);
      const data = await resp.json();

      setName(data.message.body.artist.artist_name);
    } catch (e) {
      console.log(e);
    }
  };

  const getArtistGenres = async () => {
    const validGenreIds = [1073, 1068];

    try {
      const url = `https://api.musixmatch.com/ws/1.1/music.genres.get?apikey=${
        import.meta.env.VITE_API_KEY
      }`;
      const resp = await fetch(url);
      const data = await resp.json();
      const genreArr = data.message.body.music_genre_list;
      const filteredArr = genreArr.filter((g) =>
        validGenreIds.includes(g.music_genre.music_genre_id)
      );

      setGenres(filteredArr);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h1 className='artist-name'>{name}</h1>
      <p className='artist-intro'>{data[artist_id].artist_intro}</p>
      <div className='artist-genres'>
        {genres.map((g, i) => (
          <Genre value={g.music_genre.music_genre_name} key={i} />
        ))}
      </div>
    </>
  );
}

Artist.propTypes = {
  artist_id: PropTypes.number
};

export default Artist;
