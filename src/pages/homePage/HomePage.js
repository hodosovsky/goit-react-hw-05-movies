import { FetchTopMovies } from 'services/ApiService';
import { useEffect, useState } from 'react';
import { FilmList } from 'components/Film.List/FilmList';

const HomePage = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    FetchTopMovies().then(films => {
      const filmCollection = films.data.results;
      setFilms(filmCollection);
    });
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      <FilmList films={films} />
    </>
  );
};

export default HomePage;
