import { useEffect, useState } from 'react';
import Song from '../Song';

function TopSongs() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    getSongs();
  }, []);

  const getSongs = async () => {
    try {
      const url = 'https://theaudiodb.com/api/v1/json/2/track.php?m=2408685';
      const resp = await fetch(url);
      const songsData = await resp.json();

      setSongs(songsData.track);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='top-songs-section'>
      <h2>Top Songs</h2>
      <table className='songs-container'>
        <tbody>
          {songs.map((s, i) => (
            <Song
              name={s.strTrack}
              album={s.strAlbum}
              length={s.intDuration}
              key={i}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopSongs;
