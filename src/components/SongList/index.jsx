import axios from 'axios';
import { useEffect, useState } from 'react';
import Song from '../Song';

function SongList() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs();
  }, []);

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
