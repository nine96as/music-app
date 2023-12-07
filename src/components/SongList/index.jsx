import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Song from '../Song';

function SongList({ artist_id }) {
  const [songs, setSongs] = useState([]);
  const [details, setDetails] = useState([]);

  useEffect(() => {
    getAlbumDetails();
    getSongs();
  }, []);

  const getAlbumDetails = async () => {
    const resp = await axios.get(
      `https://theaudiodb.com/api/v1/json/2/album.php?i=${artist_id}`
    );
    const album = resp.data.album.pop();
    setDetails([
      {
        album_id: parseInt(album.idAlbum),
        cover_art: album.strAlbumThumb
      }
    ]);
  };

  const getSongs = async () => {
    const resp = await axios.get(
      `https://theaudiodb.com/api/v1/json/2/track.php?m=${details[0].album_id}`
    );
    const songs = resp.data.track;
    setSongs(songs);
  };

  return (
    <div className='song-list-section'>
      <h2>Top Songs</h2>
      <div className='song-container table-container'>
        {songs.map((s, i) => (
          <Song
            coverArt={details[0].cover_art}
            name={s.strTrack}
            album={s.strAlbum}
            duration={s.intDuration}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}

export default SongList;

SongList.propTypes = {
  artist_id: PropTypes.number
};
