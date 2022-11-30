import styled from 'styled-components';

const FilmListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 20px;

  & li {
    width: 150px;
  }
`;

export { FilmListStyled };
