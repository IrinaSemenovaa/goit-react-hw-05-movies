import { useLocation } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import {
  StyledInput,
  StyledInputField,
  StyledLink,
  StyledLinksContainer,
} from './MoviesStyles';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');

  const location = useLocation();

  const fetchMovies = useCallback(async () => {
    if (search.trim() === '') {
      setMovies([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&api_key=fb3515b73dbebc75ad9d5f107517204c&query=${search}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }, [search]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <div>
      <StyledInputField>
        <StyledInput
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="For example — matrix"
        />
      </StyledInputField>
      <StyledLinksContainer>
        {movies.map(movie => (
          <StyledLink
            key={movie.id}
            to={`/movies/${movie.id}`}
            state={{ from: location }}
          >
            {movie.title}
          </StyledLink>
        ))}
      </StyledLinksContainer>
    </div>
  );
}
