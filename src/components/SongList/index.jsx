import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Song from '../Song';

function SongList({ artist_id }) {
  const [songs, setSongs] = useState([]);
  const [coverArt, setCoverArt] = useState('');

  useEffect(() => {
    getAlbumCoverArt();
    getSongs();
  }, []);

  const getAlbumCoverArt = async () => {
    const resp = await axios.get(
      `https://theaudiodb.com/api/v1/json/2/album.php?i=${artist_id}`
    );
    setCoverArt(resp.data.album.pop().strAlbumThumb);
  };

  const getSongs = async () => {
    const resp = await axios.get(
      'https://theaudiodb.com/api/v1/json/2/track.php?m=2408685'
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
            coverArt={coverArt}
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
