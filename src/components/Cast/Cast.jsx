import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  StyledCastBox,
  StyledCastGrid,
  StyledCastImg,
  StyledCastName,
  StyledCastText,
} from './CastStyles';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=fb3515b73dbebc75ad9d5f107517204c&language=en-US`
        );
        setCast(response.data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieCast();
  }, [movieId]);

  return (
    <div>
      <StyledCastGrid>
        {cast.map(actor => (
          <StyledCastBox key={actor.id}>
            <StyledCastImg
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
            />
            <StyledCastName>{actor.name}</StyledCastName>
            <StyledCastText>Character: {actor.character}</StyledCastText>
          </StyledCastBox>
        ))}
      </StyledCastGrid>
    </div>
  );
}
