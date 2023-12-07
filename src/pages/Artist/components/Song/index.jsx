import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import Like from '../Like';
import './style.css';

function Song({ coverArt, name, album, duration }) {
  return (
    <div className='song'>
      <div className='song-row'>
        <img className='song-cover-art song-item' src={coverArt} alt={name} />
        <div className='song-name song-item'>{name}</div>
        <div className='song-album song-item'>{album}</div>
        <div className='song-length song-item'>
          {dayjs(parseInt(duration)).format('m:ss')}
        </div>
        <Like />
      </div>
    </div>
  );
}

Song.propTypes = {
  coverArt: PropTypes.string,
  name: PropTypes.string,
  album: PropTypes.string,
  duration: PropTypes.string
};

export default Song;
