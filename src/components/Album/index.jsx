import PropTypes from 'prop-types';

function Album({ name, img }) {
  return (
    <div className='album'>
      <img className='album-cover-art' src={img} />
      <div className='album-name'>{name}</div>
    </div>
  );
}

Album.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string
};

export default Album;
