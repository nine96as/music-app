import PropTypes from 'prop-types';
import { data } from '../assets/data';
import Like from './Like';

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
      <Like />
    </div>
  );
}

Song.propTypes = {
  artist_id: PropTypes.number,
  value: PropTypes.number
};

export default Song;
