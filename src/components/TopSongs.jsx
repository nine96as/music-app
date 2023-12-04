import { data } from '../assets/data';

function TopSongs() {
  return (
    <div className='top-songs-section'>
      <h2>Top Songs</h2>
      <div className='songs-container'>
        <div className='song'>
          <img
            className='song-cover-art'
            src={data[0].top_songs[0].cover_art}
            alt=''
          />
          <div className='song-name'>{data[0].top_songs[0].name}</div>
          <div className='song-album'>{data[0].top_songs[0].album}</div>
          <div className='song-length'>{data[0].top_songs[0].length}</div>
          <div className='song-listens'>{data[0].top_songs[0].listens}</div>
          <button className='like-btn'>
            <svg
              fill='none'
              height='24'
              shapeRendering='geometricPrecision'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              viewBox='0 0 24 24'
              width='24'
            >
              <path
                d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'
                fill='var(--geist-fill)'
              />
            </svg>
          </button>
        </div>
        <div className='song'>
          <img
            className='song-cover-art'
            src={data[0].top_songs[1].cover_art}
            alt=''
          />
          <div className='song-name'>{data[0].top_songs[1].name}</div>
          <div className='song-album'>{data[0].top_songs[1].album}</div>
          <div className='song-length'>{data[0].top_songs[1].length}</div>
          <div className='song-listens'>{data[0].top_songs[1].listens}</div>
          <button className='like-btn'>
            <svg
              fill='none'
              height='24'
              shapeRendering='geometricPrecision'
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='1.5'
              viewBox='0 0 24 24'
              width='24'
            >
              <path
                d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'
                fill='var(--geist-fill)'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopSongs;
