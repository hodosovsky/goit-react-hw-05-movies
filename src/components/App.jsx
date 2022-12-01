import { lazy } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { Layout } from './Layout';

// import { HomePage } from 'pages/homePage/HomePage';
// import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
// import { MovieByIDPage } from 'pages/MovieDetails/MovieDetailsPage';
// import { CastPage } from 'pages/Cast/CastPage';
// import { ReviewPage } from 'pages/Reviews/ReviewsPages';
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieByIDPage = lazy(() =>
  import('../pages/MovieDetails/MovieDetailsPage')
);
const CastPage = lazy(() => import('../pages/Cast/CastPage'));
const ReviewPage = lazy(() => import('../pages/Reviews/ReviewsPages'));

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:moveiId" element={<MovieByIDPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
