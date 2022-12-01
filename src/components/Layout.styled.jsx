import styled from 'styled-components';

const HeaderList = styled.ul`
  display: flex;
  gap: 40px;
  list-style: none;
  & li a {
    text-decoration: none;
    color: grey;
    &.active {
      color: red;
    }
  }
`;

export { HeaderList };
