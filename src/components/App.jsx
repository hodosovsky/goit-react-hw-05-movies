import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';

import { HomePage } from 'pages/homePage/HomePage';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { MovieByIDPage } from 'pages/MovieDetails/MovieDetailsPage';

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:moveiId" element={<MovieByIDPage />} />
          <Route path="movies/:moveiId/cast" element={<div>cast</div>} />
          <Route path="movies/:moveiId/reviews" element={<div>reviews</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
