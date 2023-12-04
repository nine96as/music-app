import { data } from '../assets/data';
import Song from './Song';

function TopSongs() {
  return (
    <div className='top-songs-section'>
      <h2>Top Songs</h2>
      <div className='songs-container'>
        {data[0].top_songs.map((_, i) => (
          <Song artist_id={0} value={i} key={i} />
        ))}
      </div>
    </div>
  );
}

export default TopSongs;
