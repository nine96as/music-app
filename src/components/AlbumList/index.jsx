import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useArtist } from '../../contexts';
import AlbumCard from '../AlbumCard';
import './style.css';

function AlbumList() {
  const { albums, setAlbums } = useArtist();
  const { id } = useParams();

  useEffect(() => {
    getAlbums();
  }, []);

  const getAlbums = async () => {
    const { data } = await axios.get(
      `https://theaudiodb.com/api/v1/json/2/album.php?i=${id}`
    );
    const albums = data.album.filter((a) => a.strAlbumThumb);
    setAlbums(albums);
  };

  return (
    <div className='album-list-section'>
      <h2>Albums</h2>
      <div className='album-container'>
        {albums.map((a, i) => (
          <AlbumCard name={a.strAlbum} img={a.strAlbumThumb} key={i} />
        ))}
      </div>
    </div>
  );
}

export default AlbumList;
