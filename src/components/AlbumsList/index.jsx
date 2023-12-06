import { useEffect, useState } from 'react';
import Album from '../Album';

function AlbumsList() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    getAlbums();
  }, []);

  const getAlbums = async () => {
    try {
      const url = 'https://theaudiodb.com/api/v1/json/2/album.php?i=144041';
      const resp = await fetch(url);
      const albumsData = await resp.json();

      const filteredAlbums = albumsData.album.filter((a) => a.strAlbumThumb);

      setAlbums(filteredAlbums);
    } catch (e) {
      console.log(e);
    }
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
