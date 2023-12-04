import PropTypes from 'prop-types';
import { data } from '../assets/data';
import Genre from './Genre';

function Artist({ artist_id }) {
  return (
    <>
      <h1 className='artist-name'>{data[artist_id].artist_name}</h1>
      <p className='artist-intro'>{data[artist_id].artist_intro}</p>
      <div className='artist-genres'>
        {data[0].artist_genres.map((_, i) => (
          <Genre artist_id={0} value={i} key={i} />
        ))}
      </div>
    </>
  );
}

Artist.propTypes = {
  artist_id: PropTypes.number
};

export default Artist;
