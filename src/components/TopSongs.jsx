import Song from './Song';

function TopSongs() {
  return (
    <div className='top-songs-section'>
      <h2>Top Songs</h2>
      <div className='songs-container'>
        <Song id={0} value={0} />
        <Song id={0} value={1} />
      </div>
    </div>
  );
}

export default TopSongs;
