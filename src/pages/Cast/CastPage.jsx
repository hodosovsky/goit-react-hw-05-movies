import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FetchMovieCast } from 'services/ApiService';
import defaultImage from '../../images/default-avatar.png';

const CastPage = () => {
  const [cast, setCast] = useState([]);

  const { moveiId } = useParams();
  useEffect(
    (prevProps, prevState) => {
      FetchMovieCast(moveiId)
        .then(cast => {
          const filmcast = cast.data.cast;

          setCast(filmcast);
        })

        .catch(error => {
          console.log(error);
        });
    },
    [moveiId]
  );
  return (
    <ul>
      {cast.map(item => (
        <li key={item.name}>
          <img
            src={
              item.profile_path
                ? 'https://image.tmdb.org/t/p/w500' + item.profile_path
                : defaultImage
            }
            alt={item.name}
            width="60"
          ></img>
          <p>Name: {item.name}</p>
          <p>character: {item.character}</p>
        </li>
      ))}
    </ul>
  );
};

export { CastPage };
