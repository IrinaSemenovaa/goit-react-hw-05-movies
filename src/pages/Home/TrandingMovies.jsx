import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { StyledMoviesItem, StyledTtandingTitle } from './TrandingMoviesStyles';

export default function TrandingMovies() {
  const [movies, setMovies] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=fb3515b73dbebc75ad9d5f107517204c'
        );
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendingMovies();
  }, [setMovies]);

  return (
    <div>
      <StyledTtandingTitle>Trending Movies</StyledTtandingTitle>
      <ul>
        {movies.map(movie => (
          <StyledMoviesItem key={movie.id}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title}
            </Link>
          </StyledMoviesItem>
        ))}
      </ul>
    </div>
  );
}
