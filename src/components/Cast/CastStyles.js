import styled from '@emotion/styled';

export const StyledCastGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
`;

export const StyledCastBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const StyledCastImg = styled.img`
  width: 100px;
  height: 150px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const StyledCastName = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const StyledCastText = styled.p`
  font-size: 14px;
`;
