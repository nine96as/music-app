import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import Like from '../Like';

function Song({ name, album, duration }) {
  return (
    <div className='song'>
      <div className='song table-row'>
        <img
          className='song-cover-art row-item'
          src='https://www.theaudiodb.com/images/media/album/thumb/tc353i1691147138.jpg'
          alt={name}
        />
        <div className='song-name row-item'>{name}</div>
        <div className='song-album row-item'>{album}</div>
        <div className='song-length row-item'>
          {dayjs(parseInt(duration)).format('m:ss')}
        </div>
        <Like />
      </div>
    </div>
  );
}

Song.propTypes = {
  name: PropTypes.string,
  album: PropTypes.string,
  duration: PropTypes.string
};

export default Song;
