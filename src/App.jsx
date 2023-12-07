import { Route, Routes } from 'react-router-dom';
import './App.css';
import { NavBar } from './layout';
import * as Pages from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Pages.Home />} />

          <Route path='/artists'>
            <Route index element={<Pages.Artists />} />
            <Route path=':id' element={<Pages.Artist />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
