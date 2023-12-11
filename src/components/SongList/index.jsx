import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SongCard from '../SongCard';
import './style.css';

function SongList() {
  const [songs, setSongs] = useState([]);
  const [album, setAlbum] = useState();
  const { id } = useParams();

  useEffect(() => {
    getAlbum();
  }, []);

  useEffect(() => {
    getSongs();
  }, [album]);

  const getAlbum = async () => {
    const { data } = await axios.get(
      `https://theaudiodb.com/api/v1/json/2/album.php?i=${id}`
    );
    const albums = data.album.filter((a) => a.strAlbumThumb);
    setAlbum(albums.pop());
  };

  const getSongs = async () => {
    const { data } = await axios.get(
      `https://theaudiodb.com/api/v1/json/2/track.php?m=${album.idAlbum}`
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
            coverArt={album.strAlbumThumb}
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
