import styled from 'styled-components';

const FilmList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 20px;

  & li {
    width: 150px;
  }
`;

export { FilmList };
