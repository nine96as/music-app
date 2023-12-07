import PropTypes from 'prop-types';
import './style.css';

function Album({ name, img }) {
  return (
    <div className='album'>
      <img className='album-cover-art' src={img} alt={name} />
      <div className='album-name'>{name}</div>
    </div>
  );
}

Album.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string
};

export default Album;
