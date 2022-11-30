import { useParams, Link, Outlet } from 'react-router-dom';
import { FetchMovieByID } from 'services/ApiService';
import { useEffect, useState } from 'react';
import { DescriptionWrap } from './MovieDetails.styled';

export const MovieByIDPage = () => {
  const [movie, setMovie] = useState([]);
  const [posterUrl, setPosterUrl] = useState('');
  const { moveiId } = useParams();

  useEffect(
    (prevProps, prevState) => {
      FetchMovieByID(moveiId)
        .then(film => {
          const filmDetails = film.data;

          setMovie(filmDetails);

          let imageURL = 'https://image.tmdb.org/t/p/w500';
          imageURL = imageURL + filmDetails.poster_path;
          setPosterUrl(imageURL);
        })
        .catch(error => {
          console.log(error);
        });
    },
    [moveiId, posterUrl]
  );

  return (
    <section>
      <DescriptionWrap className="desription">
        <div className="poster">
          <img src={posterUrl} alt={movie.original_title} width="300" />
        </div>
        <div>
          <h2>{movie.original_title}</h2>
          {movie.vote_average > 0 && (
            <p>User Score: {Math.round(movie.vote_average * 10)}%</p>
          )}

          <br />
          <a href={movie.homepage} target="blanc">
            Homepage
          </a>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          {movie.genres && <h4>Genres</h4>}
          {movie.genres && <p>{movie.genres.map(genr => genr.name + ' ')}</p>}
        </div>
      </DescriptionWrap>
      <Link to={`/movies/${moveiId}/cast`}>Cast</Link>
      <br />
      <br />
      <Link to={`/movies/${moveiId}/reviews`}>Reviews</Link>
      <Outlet />
    </section>
  );
};
