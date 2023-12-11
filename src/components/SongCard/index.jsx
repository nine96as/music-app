import dayjs from 'dayjs';
import LikeButton from '../LikeButton';
import './style.css';

function SongCard({ coverArt, name, album, duration }) {
  return (
    <div className='song'>
      <div className='song-row'>
        <img className='song-cover-art song-item' src={coverArt} alt={name} />
        <div className='song-name song-item'>{name}</div>
        <div className='song-album song-item'>{album}</div>
        <div className='song-length song-item'>
          {dayjs(parseInt(duration)).format('m:ss')}
        </div>
        <LikeButton />
      </div>
    </div>
  );
}

export default SongCard;
