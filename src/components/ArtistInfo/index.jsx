import PropTypes from 'prop-types';
import Artist from '../Artist';

function ArtistInfo({ artist_id }) {
  return (
    <div className='info-section'>
      <Artist artist_id={artist_id} />
    </div>
  );
}

export default ArtistInfo;

ArtistInfo.propTypes = {
  artist_id: PropTypes.number
};
