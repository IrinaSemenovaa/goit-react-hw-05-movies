import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledInputField = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  width: 400px;
`;

export const StyledLinksContainer = styled.div`
  display: block;
  margin-top: 8px;
`;
export const StyledLink = styled(Link)`
  display: block; 
  margin-bottom: 10px; 
  text-decoration: none;
  color: #333;
  font-weight: bold;
`;

export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #5783cf;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
`;