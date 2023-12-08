import { useNavigate } from 'react-router-dom';
import './style.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className='home'>
      <h1 role='heading'>
        Browse through <s>trending</s> artists.
      </h1>
      <div className='home-btn-container'>
        <button
          role='button'
          className='button-85'
          aria-label='view artists'
          onClick={() => navigate('/artists')}
        >
          View artists
        </button>
      </div>
    </div>
  );
};

export default Home;
