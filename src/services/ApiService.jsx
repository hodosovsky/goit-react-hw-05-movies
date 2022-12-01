import axios from 'axios';
const API_KEY = 'dc1eafce510836ca61a79dd47f826d41';
export const FetchTopMovies = async () => {
  const data = await axios
    .get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
    .then();

  return data;
};

// export async function FetchMovieByID(movieId) {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
//   )
//     .then(res => {
//       if (res.status >= 200 && res.status < 300) {
//         return res.json();
//       } else {
//         let error = new Error(res.statusText);
//         error.response = res;
//         throw error;
//       }
//     })
//     .then(data => data)
//     .catch(error => error);

// }

export const FetchMovieByID = async movieId => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
  );

  return data;
};

export const FetchMovieCast = async movieId => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
  );

  return data;
};

export const FetchMovieReview = async movieId => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`
  );

  return data;
};

export const FetchByMovieName = async movieName => {
  const data = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${API_KEY}`
  );

  return data;
};
