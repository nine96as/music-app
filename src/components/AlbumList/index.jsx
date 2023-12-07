import axios from 'axios';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Album from '../Album';

function AlbumList({ artist_id }) {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums();
  }, []);

  const getAlbums = async () => {
    const resp = await axios.get(
      `https://theaudiodb.com/api/v1/json/2/album.php?i=${artist_id}`
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

AlbumList.propTypes = {
  artist_id: PropTypes.number
};
