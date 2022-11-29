import { useParams } from 'react-router-dom';
import { MovieByID } from 'services/MovieByID';
import { useEffect, useState } from 'react';

export const MovieByIDPage = () => {
  const [movie, setMovie] = useState([]);
  const { moveiId } = useParams();
  console.log(moveiId);

  const posterURL = 'https://image.tmdb.org/t/p/w500/';
  useEffect(() => {
    MovieByID(moveiId)
      .then(film => {
        const filmDetails = film.data;
        console.log(filmDetails);
        setMovie(filmDetails);
      })
      .catch(error => {
        console.log(error);
      });
  }, [moveiId]);

  return (
    <section>
      <h2>{movie.original_title}</h2>
      <img
        src={posterURL + movie.poster_path}
        alt={movie.original_title}
        width="300"
      />
      <br />
      <a href={movie.homepage} target="blanc">
        Homepage
      </a>
      <p>{movie.overview}</p>
      {/* <li key={film.id}>
        <Link className="film-link" to={`/movies/${film.id}`}>
          <img
            src={posterURL + film.poster_path}
            alt={film.title ?? film.name}
            width="100"
          ></img>
          <br />
          {film.title ?? film.name}
        </Link>
      </li> */}
    </section>
  );
};
