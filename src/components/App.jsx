import { lazy, Suspense } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { StyledMainContainer } from 'pages/Home/TrandingMoviesStyles';
import styled from '@emotion/styled';

const TrandingMovies = lazy(() =>
  import('pages/Home/TrandingMovies')
);
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 10px;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 2%,
    rgba(21, 146, 222, 1) 59%,
    rgba(255, 255, 255, 1) 100%
  );
`;

const StyledNavLink = styled(NavLink)`
  margin-right: 10px;
  padding: 10px 20px;
  text-decoration: none;
  color: #333;
  font-weight: bold;
  background-color: #f2f2f2;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;

  &.active {
    background-color: blue;
    color: white;
  }
`;

export const App = () => {
  return (
    <StyledMainContainer>
      <StyledNav>
        <StyledNavLink to="/" activeclassname="active">
          Home
        </StyledNavLink>
        <StyledNavLink to="/movies" activeclassname="active">
          Movies
        </StyledNavLink>
      </StyledNav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<TrandingMovies />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </StyledMainContainer>
  );
};
