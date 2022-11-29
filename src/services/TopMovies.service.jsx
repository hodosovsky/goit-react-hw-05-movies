import axios from 'axios';

export const TopMovies = async () => {
  const data = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?api_key=dc1eafce510836ca61a79dd47f826d41'
  );

  return data;
};
