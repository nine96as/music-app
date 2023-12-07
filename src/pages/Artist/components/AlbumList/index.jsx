import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Album from '../Album';

function AlbumList() {
  const [albums, setAlbums] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getAlbums();
  }, []);

  const getAlbums = async () => {
    const resp = await axios.get(
      `https://theaudiodb.com/api/v1/json/2/album.php?i=${id}`
    );
    const albums = resp.data.album.filter((a) => a.strAlbumThumb);
    setAlbums(albums);
  };

  return (
    <div className='album-list-section'>
      <h2>Albums</h2>
      <div className='album-container'>
        {albums.map((a, i) => (
          <Album name={a.strAlbum} img={a.strAlbumThumb} key={i} />
        ))}
      </div>
    </div>
  );
}

export default AlbumList;
