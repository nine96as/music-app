import PropTypes from 'prop-types';
import './style.css';

function Genre({ value }) {
  return <div className='genre'>{value}</div>;
}

Genre.propTypes = {
  value: PropTypes.string
};

export default Genre;
