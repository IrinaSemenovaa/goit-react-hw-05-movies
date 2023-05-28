import styled from '@emotion/styled';

const StyledErrorTitle = styled.h1`
  margin-top: 125px;
  margin-bottom: 10px;
  text-align: center;
`;

const StyledErrorText = styled.p`
  text-align: center;
  font-size: 24px;
`;

const StyledErrorLink = styled.a`
  color: #0000ff;
  font-weight: 700;
`;

export default function NotFound() {
  return (
    <div>
      <StyledErrorTitle>Error 404</StyledErrorTitle>
      <StyledErrorText>
        Page Not Found We're sorry, but the page you requested could not be
        found. Please check the URL for any mistakes and try again. You can go
        back to the{' '}
        <StyledErrorLink href="/goit-react-hw-05-movies">
          home page
        </StyledErrorLink>{' '}
        to continue browsing.
      </StyledErrorText>
    </div>
  );
}
