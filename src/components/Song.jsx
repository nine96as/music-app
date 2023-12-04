import PropTypes from 'prop-types';
import { data } from '../assets/data';

function Song({ artist_id, value }) {
  return (
    <div className='song'>
      <img
        className='song-cover-art'
        src={data[artist_id].top_songs[value].cover_art}
        alt=''
      />
      <div className='song-name'>{data[artist_id].top_songs[value].name}</div>
      <div className='song-album'>{data[artist_id].top_songs[value].album}</div>
      <div className='song-length'>
        {data[artist_id].top_songs[value].length}
      </div>
      <div className='song-listens'>
        {data[artist_id].top_songs[value].listens}
      </div>
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
  );
}

Song.propTypes = {
  artist_id: PropTypes.number,
  value: PropTypes.number
};

export default Song;
