import styled from '@emotion/styled';

export const StyledMainContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  width: auto;
`;

export const StyledTtandingTitle = styled.h1`
  margin-top: 10px;
  margin-bottom: 30px;
  text-align: center;
`;

export const StyledMoviesItem = styled.li`
  font-size: 18px;
  font-weight: 500;
  color: #000000;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
