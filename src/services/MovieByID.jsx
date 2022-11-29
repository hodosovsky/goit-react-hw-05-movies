import axios from 'axios';

export const MovieByID = async movie_id => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=dc1eafce510836ca61a79dd47f826d41`
  );

  return data;
};
