import styled from 'styled-components';

export const MiniaturesWrapper = styled.section`
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
