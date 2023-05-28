import { useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  StyledButton,
  StyledInput,
  StyledInputField,
  StyledLink,
  StyledLinksContainer,
} from './MoviesStyles';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const fetchMovies = async searchValue => {
    if (searchValue.trim() === '') {
      setMovies([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&api_key=fb3515b73dbebc75ad9d5f107517204c&query=${searchValue}`
      );
      setMovies(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    setSearchParams({ query: searchValue });
    await fetchMovies(searchValue);
  };

  useEffect(() => {
    const searchValue = searchParams.get('query') || '';
    fetchMovies(searchValue);
  }, [searchParams]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <StyledInputField>
          <StyledInput
            type="text"
            name="search"
            placeholder="For example — Matrix"
          />
          <StyledButton type="submit">Search</StyledButton>
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
      </form>
    </div>
  );
}
