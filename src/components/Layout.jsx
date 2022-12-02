import { Suspense } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { HeaderList } from './Layout.styled';

export const Layout = () => {
  return (
    <header>
      <HeaderList className="header-list">
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
      </HeaderList>
      <Suspense fallback={<p>loading...</p>}>
        <Outlet />
      </Suspense>
    </header>
  );
};
