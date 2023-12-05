import { data } from '../../assets/data';
import Album from '../Album';

function AlbumsList() {
  return (
    <div className='albums-list-section'>
      <h2>Albums</h2>
      <div className='albums-container'>
        {data[0].albums.map((_, i) => (
          <Album artist_id={0} value={i} key={i} />
        ))}
      </div>
    </div>
  );
}

export default AlbumsList;
