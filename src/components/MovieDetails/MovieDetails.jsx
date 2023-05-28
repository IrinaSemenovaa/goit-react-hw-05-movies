import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import NotFound from 'pages/NotFoundMessage';
import axios from 'axios';
import {
  StyledAdditionalBox,
  StyledShortstory,
  StyledShortstoryFlexWrapper,
  StyledShortstoryImg,
  StyledShortstoryInfo,
  StyledShortstoryMainTitle,
  StyledShortstoryPoster,
  StyledShortstoryRating,
  StyledShortstoryText,
  StyledShortstoryTitle,
} from './MovieDetailsStyles';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from || '/movies');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=fb3515b73dbebc75ad9d5f107517204c`
        );
        setMovie(response.data);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (error) {
    return <NotFound />;
  }

  if (!movie) {
    return <div>Loading...</div>;
  }

  const genres = movie.genres.map(genre => genre.name).join(', ');
  const parcent = Math.round((movie.vote_average / 10) * 100);

  return (
    <StyledShortstory>
      <Link to={backLinkLocation.current}>Go back</Link>
      <StyledShortstoryFlexWrapper>
        <StyledShortstoryPoster>
          <StyledShortstoryImg
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </StyledShortstoryPoster>
        <StyledShortstoryInfo>
          <StyledShortstoryMainTitle>{movie.title}</StyledShortstoryMainTitle>
          <StyledShortstoryRating>
            User score: {parcent}%
          </StyledShortstoryRating>
          <StyledShortstoryTitle>Overview</StyledShortstoryTitle>
          <StyledShortstoryText>{movie.overview}</StyledShortstoryText>
          <StyledShortstoryTitle>Genres</StyledShortstoryTitle>
          <StyledShortstoryText>{genres}</StyledShortstoryText>
        </StyledShortstoryInfo>
      </StyledShortstoryFlexWrapper>
      <StyledAdditionalBox>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </StyledAdditionalBox>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </StyledShortstory>
  );
}
