import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  StyledReview,
  StyledReviewsBox,
  StyledReviewAuthor,
  StyledReviewContent,
  StyledNoReviews,
} from './ReviewsStyles';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=fb3515b73dbebc75ad9d5f107517204c&language=en-US`
        );
        setReviews(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieReviews();
  }, [movieId]);

  return (
    <StyledReviewsBox>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <StyledReview key={review.id}>
            <StyledReviewAuthor>Author: {review.author}</StyledReviewAuthor>
            <StyledReviewContent>{review.content}</StyledReviewContent>
          </StyledReview>
        ))
      ) : (
        <StyledNoReviews>No reviews found.</StyledNoReviews>
      )}
    </StyledReviewsBox>
  );
}
