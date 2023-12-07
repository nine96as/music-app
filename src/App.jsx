import './App.css';
import { AlbumList, ArtistInfo, SongList } from './components';

function App() {
  return (
    <>
      <ArtistInfo artist_id={144041} />
      <SongList artist_id={144041} />
      <AlbumList artist_id={144041} />
    </>
  );
}

export default App;
