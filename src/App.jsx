import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ArtistProvider } from './contexts';
import { NavBar } from './layout';
import * as Pages from './pages';

function App() {
  return (
    <>
      <ArtistProvider>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<Pages.Home />} />

            <Route path='/artists'>
              <Route index element={<Pages.Artists />} />
              <Route path=':id' element={<Pages.Artist />} />
            </Route>
          </Route>
        </Routes>
      </ArtistProvider>
    </>
  );
}

export default App;
