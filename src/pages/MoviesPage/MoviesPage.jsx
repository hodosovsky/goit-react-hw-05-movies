import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { FetchByMovieName } from 'services/ApiService';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { FilmSearchedList } from './MoviesPage.styled';
import defaultposter from '../../images/default-poster.png';

const MoviesPage = () => {
  const location = useLocation();
  const [searchedFilms, setSearchedFilms] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    FetchByMovieName(query).then(data => {
      setSearchedFilms(data.data.results);
    });
  }, [query]);

  const handleSearhFilm = value => {
    setSearchParams(value !== '' ? { query: value } : {});
  };

  if (!searchedFilms) {
    return null;
  }

  return (
    <main>
      <SearchForm onSubmit={handleSearhFilm} />
      {searchedFilms.length > 0 && (
        <FilmSearchedList>
          {searchedFilms.map(item => (
            <li key={item.id}>
              <Link to={`${Number(item.id)}`} state={{ from: location }}>
                <img
                  src={
                    item?.poster_path
                      ? 'https://image.tmdb.org/t/p/w500' + item.poster_path
                      : defaultposter
                  }
                  alt={item.title ?? item.title}
                  width="100"
                ></img>

                <br />
                {item.title}
              </Link>
            </li>
          ))}
        </FilmSearchedList>
      )}
    </main>
  );
};

export default MoviesPage;
