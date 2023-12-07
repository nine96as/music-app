import PropTypes from 'prop-types';
import { default as ArtistInfoContent } from '../ArtistInfoContent';

function ArtistInfo({ artist_id }) {
  return (
    <div className='info-section'>
      <ArtistInfoContent artist_id={artist_id} />
    </div>
  );
}

export default ArtistInfo;

ArtistInfo.propTypes = {
  artist_id: PropTypes.number
};
