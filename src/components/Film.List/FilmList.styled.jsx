import styled from 'styled-components';

const FilmListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  gap: 20px;

  & li {
    padding-top: 5px;
    padding-bottom: 5px;
    width: 150px;
    text-align: center;
    border: 1px solid gray;
    border-radius: 10px;
    transition: scale 250ms linear;

    &:hover {
      scale: 1.1;
    }

    &:hover a {
      color: blue;
    }

    & a {
      display: block;
      height: 100%;
      text-decoration: none;
      color: grey;
    }
  }
`;

export { FilmListStyled };
