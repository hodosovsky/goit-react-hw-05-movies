import { Link } from 'react-router-dom';
import { TopMovies } from 'services/TopMovies.service';
import { useEffect, useState } from 'react';
import { FilmList } from './HomePage.styled';

export const HomePage = () => {
  const [films, setFilms] = useState([]);
  const posterURL = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    TopMovies().then(films => {
      const filmCollection = films.data.results;
      setFilms(filmCollection);
    });
  }, []);

  return (
    <>
      <FilmList>
        {films.map(film => (
          <li key={film.id}>
            <Link className="film-link" to={`/movies/${film.id}`}>
              <img
                src={posterURL + film.poster_path}
                alt={film.title ?? film.name}
                width="100"
              ></img>
              <br />
              {film.title ?? film.name}
            </Link>
          </li>
        ))}
      </FilmList>
    </>
  );
};
