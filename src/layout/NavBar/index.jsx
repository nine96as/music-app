import { NavLink, Outlet } from 'react-router-dom';
import './style.css';

const NavBar = () => {
  let activeStyle = {
    color: '#09090B'
  };
  return (
    <>
      <nav>
        <h2>
          {' '}
          <NavLink
            to='/'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Music
          </NavLink>
        </h2>
        <ul className='nav-links'>
          <li>
            <NavLink
              to='/artists'
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Artists
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default NavBar;
