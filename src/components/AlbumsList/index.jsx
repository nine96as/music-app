import axios from 'axios';
import { useEffect, useState } from 'react';
import Album from '../Album';

function AlbumsList() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums();
  }, []);

  const getAlbums = async () => {
    const resp = await axios.get(
      'https://theaudiodb.com/api/v1/json/2/album.php?i=144041'
    );
    const albums = resp.data.album.filter((a) => a.strAlbumThumb);
    setAlbums(albums);
  };

  return (
    <div className='albums-list-section'>
      <h2>Albums</h2>
      <div className='albums-container'>
        {albums.map((a, i) => (
          <Album name={a.strAlbum} img={a.strAlbumThumb} key={i} />
        ))}
      </div>
    </div>
  );
}

export default AlbumsList;
