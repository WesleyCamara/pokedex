import styled from 'styled-components';

export const DetailsWrapper = styled.section`
  background: ${(props) => props.theme.colors.background};
  max-width: 50rem;
  border-radius: 20px;
  box-shadow: rgb(0 0 0 / 25%) 10px 10px 30px;

  h1 {
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.background};
    font-size: 2rem;
    text-transform: capitalize;
    padding: 2rem;
    border-radius: 20px 20px 0 0;
  }
`;

export const DataWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  img {
    padding-top: 3rem 0;
    width: 50%;
    min-width: 20rem;
  }

  div {
    padding-top: 3rem 0;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  }

  p {
    width: 15rem;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background};
    font-size: 1.5rem;
    text-transform: capitalize;
    padding: 0.75rem;
    border-radius: 15px;
    margin: 0.5rem;
    white-space: nowrap;
    text-align: center;
  }
`;
