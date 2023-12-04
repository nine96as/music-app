import PropTypes from 'prop-types';
import { data } from '../assets/data';

function Album({ artist_id, value }) {
  return (
    <div className='album'>
      <img
        className='album-cover-art'
        src={data[artist_id].albums[value].cover_art}
      />
      <div className='album-name'>{data[artist_id].albums[value].name}</div>
    </div>
  );
}

Album.propTypes = {
  artist_id: PropTypes.number,
  value: PropTypes.number
};

export default Album;
