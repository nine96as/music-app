import axios from 'axios';
import { useEffect } from 'react';
import { useArtist } from '../../contexts';
import SongCard from '../SongCard';
import './style.css';

function SongList() {
  const { songs, setSongs, albums } = useArtist();

  useEffect(() => {
    getSongs();
  }, [albums]);

  const getSongs = async () => {
    const lastAlbum = albums[albums.length - 1];
    const { data } = await axios.get(
      `https://theaudiodb.com/api/v1/json/2/track.php?m=${lastAlbum.idAlbum}`
    );
    const songs = data.track;
    setSongs(songs);
  };

  return (
    <div className='song-list-section'>
      <h2>Top Songs</h2>
      <div className='song-container'>
        {songs.map((s, i) => (
          <SongCard
            coverArt={albums[albums.length - 1].strAlbumThumb}
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
