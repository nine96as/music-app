import { data } from '../assets/data';

function AlbumsList() {
  return (
    <div className='albums-list-section'>
      <h2>Albums</h2>
      <div className='albums-container'>
        <div className='album'>
          <img className='album-cover-art' src={data[0].albums[0].cover_art} />
          <div className='album-name'>{data[0].albums[0].name}</div>
        </div>
        <div className='album'>
          <img className='album-cover-art' src={data[0].albums[1].cover_art} />
          <div className='album-name'>{data[0].albums[1].name}</div>
        </div>
      </div>
    </div>
  );
}

export default AlbumsList;
