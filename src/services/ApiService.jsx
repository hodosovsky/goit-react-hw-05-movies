import axios from 'axios';

export const FetchTopMovies = async () => {
  const data = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?api_key=dc1eafce510836ca61a79dd47f826d41'
  );

  return data;
};

export const FetchMovieByID = async movie_id => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=dc1eafce510836ca61a79dd47f826d41`
  );

  return data;
};

export const FetchMovieCast = async movie_id => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=dc1eafce510836ca61a79dd47f826d41`
  );

  return data;
};

export const FetchMovieReview = async movie_id => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=dc1eafce510836ca61a79dd47f826d41`
  );

  return data;
};
