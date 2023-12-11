import './style.css';

function AlbumCard({ name, img }) {
  return (
    <div className='album'>
      <img className='album-cover-art' src={img} alt={name} />
      <div className='album-name'>{name}</div>
    </div>
  );
}

export default AlbumCard;
