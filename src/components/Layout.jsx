import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <ul className="header-list">
        <li>
          <NavLink to="" className="header-item">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="movies" className="header-item">
            Movies
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
