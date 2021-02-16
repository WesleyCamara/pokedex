import styled from 'styled-components';

export const Main = styled.main`
  padding: 4rem;
  height: calc(100vh - 10rem);
  display: grid;
  place-items: center;
`;

export const ListMiniatures = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
  gap: 1rem;
  width: 100%;
  justify-content: center;
`;
