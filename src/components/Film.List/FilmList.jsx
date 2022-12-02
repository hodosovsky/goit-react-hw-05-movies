import { Link, useLocation } from 'react-router-dom';
import { FilmListStyled } from './FilmList.styled';
import defaultposter from '../../images/default-poster.png';

export const FilmList = ({ films }) => {
  const location = useLocation();
  return (
    <>
      <FilmListStyled>
        {films.map(film => (
          <li key={film.id}>
            <Link
              className="film-link"
              to={`/movies/${film.id}`}
              state={{ from: location }}
            >
              <img
                src={
                  film?.poster_path
                    ? 'https://image.tmdb.org/t/p/w500' + film.poster_path
                    : defaultposter
                }
                alt={film.title ?? film.name}
                width="100"
              ></img>
              <br />
              {film.title ?? film.name}
            </Link>
          </li>
        ))}
      </FilmListStyled>
    </>
  );
};
