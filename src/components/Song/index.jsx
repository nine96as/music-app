import PropTypes from 'prop-types';
import Like from '../Like';

function Song({ name, album, length }) {
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
        <div className='song-length'>{length}</div>
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
  length: PropTypes.string
};

export default Song;
