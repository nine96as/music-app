import { data } from '../assets/data';

function ArtistInfo() {
  return (
    <div className='info-section'>
      <h1 className='artist-name'>{data[0].artist_name}</h1>
      <p className='artist-intro'>{data[0].artist_intro}</p>
      <div className='artist-genres'>
        <div className='genre'>{data[0].artist_genres[0].name}</div>
        <div className='genre'>{data[0].artist_genres[1].name}</div>
      </div>
    </div>
  );
}

export default ArtistInfo;
