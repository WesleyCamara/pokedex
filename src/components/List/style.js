import styled from 'styled-components';

export const Main = styled.main`
  padding: 4rem;
  height: calc(100vh - 10rem);
  display: grid;
  place-items: center;

  @media screen and (max-width: 1024px) {
    padding: 4rem 1rem;
  }
`;

export const ListMiniatures = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 200px));
  gap: 1rem;
  width: 100%;
  justify-content: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 1024px) {
    gap: 2rem;
  }
`;
