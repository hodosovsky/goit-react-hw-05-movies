import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { FetchMovieByID } from 'services/ApiService';
import { Suspense, useEffect, useState } from 'react';
import { DescriptionWrap } from './MovieDetails.styled';
import defaultposter from '../../images/default-poster.png';

const MovieByIDPage = () => {
  const location = useLocation();
  const [movie, setMovie] = useState([]);
  const [posterUrl, setPosterUrl] = useState('');
  const { moveiId } = useParams();

  useEffect(
    (prevProps, prevState) => {
      FetchMovieByID(Number(moveiId))
        .then(film => {
          const filmDetails = film.data;
          setMovie(filmDetails);

          let imageURL = 'https://image.tmdb.org/t/p/w500';
          imageURL = imageURL + filmDetails.poster_path;
          setPosterUrl(imageURL);
        })
        .catch(error => {
          return;
        });
    },
    [moveiId]
  );
  if (!movie) {
    return null;
  }

  const backLinkHref = location.state?.from ?? '/';
  return (
    <div>
      <Link to={backLinkHref}> back</Link>
      {/* {movie !== [] && ( */}
      {movie !== [] && (
        <DescriptionWrap className="desription">
          <div className="poster">
            <br />
            <img
              src={movie?.poster_path ? posterUrl : defaultposter}
              alt={movie?.poster_path ? movie.title : 'defaultposter'}
              width="200"
            />
          </div>
          <div>
            <h2>
              {movie?.original_title
                ? movie?.original_title
                : 'sorry... We have no information about this film'}
            </h2>
            {movie?.vote_average > 0 && (
              <p>User Score: {Math.round(movie?.vote_average * 10)}%</p>
            )}

            <br />
            {movie?.overview && (
              <a href={movie?.homepage} target="blanc">
                Homepage
              </a>
            )}
            {movie?.overview && <h3>Overview</h3>}
            <p>{movie?.overview && movie.overview}</p>

            {movie?.genres && <h4>Genres</h4>}
            {movie?.genres && (
              <p>{movie.genres.map(genr => genr.name + ' ')}</p>
            )}
          </div>
        </DescriptionWrap>
      )}
      <h3>Aditional information</h3>
      <Link to={`/movies/${moveiId}/cast`} state={{ from: backLinkHref }}>
        Cast
      </Link>
      <br />
      <br />
      <Link to={`/movies/${moveiId}/reviews`} state={{ from: backLinkHref }}>
        Reviews
      </Link>
      <Suspense fallback={<p>loading...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieByIDPage;
