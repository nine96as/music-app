import './App.css';
import { AlbumList, ArtistInfo, SongList } from './components';

function App() {
  return (
    <>
      <ArtistInfo artist_id={144041} />
      <SongList />
      <AlbumList />
    </>
  );
}

export default App;
