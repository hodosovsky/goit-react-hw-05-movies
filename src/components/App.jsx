import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';

import { HomePage } from 'pages/homePage/HomePage';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { MovieByIDPage } from 'pages/MovieDetails/MovieDetailsPage';
import { CastPage } from 'pages/Cast/CastPage';
import { ReviewPage } from 'pages/Reviews/ReviewsPages';

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:moveiId" element={<MovieByIDPage />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
