import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import Like from '../Like';

function Song({ name, album, duration }) {
  return (
    <tr className='song'>
      <td>
        <img
          className='song-cover-art'
          src='https://www.theaudiodb.com/images/media/album/thumb/tc353i1691147138.jpg'
          alt={name}
        />
      </td>
      <td>
        <div className='song-name'>{name}</div>
      </td>
      <td>
        <div className='song-album'>{album}</div>
      </td>
      <td>
        <div className='song-length'>
          {dayjs(parseInt(duration)).format('m:ss')}
        </div>
      </td>
      <td>
        <Like />
      </td>
    </tr>
  );
}

Song.propTypes = {
  name: PropTypes.string,
  album: PropTypes.string,
  duration: PropTypes.string
};

export default Song;
