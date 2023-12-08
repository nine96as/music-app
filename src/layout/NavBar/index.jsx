import { NavLink, Outlet } from 'react-router-dom';
import './style.css';

const NavBar = () => {
  let activeStyle = {
    color: '#09090B'
  };
  return (
    <>
      <nav role='navigation'>
        <h2>
          <NavLink
            role='link'
            to='/'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Music
          </NavLink>
        </h2>
        <ul className='nav-links'>
          <li>
            <NavLink
              role='link'
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
