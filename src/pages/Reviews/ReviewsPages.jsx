import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FetchMovieReview } from 'services/ApiService';
import defaultImage from '../../images/default-avatar.png';

const ReviewPage = () => {
  const [review, setReview] = useState([]);

  const { moveiId } = useParams();
  useEffect(
    (prevProps, prevState) => {
      FetchMovieReview(moveiId)
        .then(cast => {
          const filmReview = cast.data.results;
          console.log(filmReview);
          setReview(filmReview);
        })
        .catch(error => {
          console.log(error);
        });
    },
    [moveiId]
  );
  return (
    <ul>
      {review.length === 0 && (
        <h4>We do not have any reviews for this movie</h4>
      )}
      {review.map(item => (
        <li key={item.id}>
          <h6>{item.author}</h6>
          <p>{item.content && item.content}</p>
        </li>
      ))}
    </ul>
  );
};

export { ReviewPage };
