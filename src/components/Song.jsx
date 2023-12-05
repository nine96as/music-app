import PropTypes from 'prop-types';
import { data } from '../assets/data';
import Like from './Like';

function Song({ artist_id, value }) {
  return (
    <tr className='song'>
      <td>
        {' '}
        <img
          className='song-cover-art'
          src={data[artist_id].top_songs[value].cover_art}
          alt=''
        />
      </td>
      <td>
        <div className='song-name'>{data[artist_id].top_songs[value].name}</div>
      </td>
      <td>
        {' '}
        <div className='song-album'>
          {data[artist_id].top_songs[value].album}
        </div>
      </td>
      <td>
        {' '}
        <div className='song-length'>
          {data[artist_id].top_songs[value].length}
        </div>
      </td>
      <td>
        {' '}
        <div className='song-listens'>
          {data[artist_id].top_songs[value].listens}
        </div>
      </td>
      <td>
        {' '}
        <Like />
      </td>
    </tr>
  );
}

Song.propTypes = {
  artist_id: PropTypes.number,
  value: PropTypes.number
};

export default Song;
