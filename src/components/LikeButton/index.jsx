import { useState } from 'react';
import './style.css';

function LikeButton() {
  const [like, setLike] = useState(false);

  function handleClick() {
    like ? setLike(false) : setLike(true);
  }

  return (
    <button className='like-btn' onClick={handleClick}>
      {like ? (
        <svg
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
      ) : (
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
      )}
    </button>
  );
}

export default LikeButton;
