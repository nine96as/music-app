import PropTypes from 'prop-types';
import { data } from '../../assets/data';

function Genre({ artist_id, value }) {
  return (
    <div className='genre'>{data[artist_id].artist_genres[value].name}</div>
  );
}

Genre.propTypes = {
  artist_id: PropTypes.number,
  value: PropTypes.number
};

export default Genre;
