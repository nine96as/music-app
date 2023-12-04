import './index.css';

function App() {
  return (
    <>
      <div className='info-section'>
        <h1 className='artist-name'>Alan Walker</h1>
        <p className='artist-intro'>
          Alan Olav Walker, formerly known by his stage name Dj Walkzz, is a
          British-born Norwegian record producer and DJ. He is best known for
          his 2015 single &quot;Faded&quot;.
        </p>
        <div className='artist-genres'>
          <div className='genre'>Electronic</div>
          <div className='genre'>Classical</div>
        </div>
      </div>

      <div className='top-songs-section'>
        <h2>Top Songs</h2>
        <div className='songs-container'>
          <div className='song'>
            <img
              className='song-cover-art'
              src='https://upload.wikimedia.org/wikipedia/en/d/da/Alan_Walker_-_Faded.png'
              alt=''
            />
            <div className='song-name'>Faded</div>
            <div className='song-album'>Different World</div>
            <div className='song-length'>3:32</div>
            <div className='song-listens'>2,011,779,067</div>
            <button className='like-btn'>
              <svg
                fill='none'
                height='24'
                shapeRendering='geometricPrecision'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                viewBox='0 0 24 24'
                width='24'
              >
                <path
                  d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'
                  fill='var(--geist-fill)'
                />
              </svg>
            </button>
          </div>
          <div className='song'>
            <img
              className='song-cover-art'
              src='https://upload.wikimedia.org/wikipedia/en/d/da/Alan_Walker_-_Faded.png'
              alt=''
            />
            <div className='song-name'>Faded</div>
            <div className='song-album'>Different World</div>
            <div className='song-length'>3:32</div>
            <div className='song-listens'>2,011,779,067</div>
            <button className='like-btn'>
              <svg
                fill='none'
                height='24'
                shapeRendering='geometricPrecision'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                viewBox='0 0 24 24'
                width='24'
              >
                <path
                  d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'
                  fill='var(--geist-fill)'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className='albums-list-section'>
        <h2>Albums</h2>
        <div className='albums-container'>
          <div className='album'>
            <img
              className='album-cover-art'
              src='https://upload.wikimedia.org/wikipedia/en/a/a8/Alan_Walker_%E2%80%93_Different_World.png'
            />
            <div className='album-name'>Different World</div>
          </div>
          <div className='album'>
            <img
              className='album-cover-art'
              src='https://upload.wikimedia.org/wikipedia/en/a/a8/Alan_Walker_%E2%80%93_Different_World.png'
            />
            <div className='album-name'>Different World</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
