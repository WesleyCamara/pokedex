import styled from 'styled-components';

export const DetailsWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 10rem);

  section {
    background: ${(props) => props.theme.colors.background};
    width: 50rem;
    border-radius: 20px;
    box-shadow: rgb(0 0 0 / 25%) 10px 10px 30px;
    display: grid;
  }

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
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  img {
    flex: 1;
  }

  div {
    flex: 1;
  }

  p {
    width: 15rem;
    background: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.background};
    font-size: 1.5rem;
    text-transform: capitalize;
    padding: 0.75rem;
    border-radius: 15px;
    margin: 0.5rem;
    white-space: nowrap;

    span {
      margin-left: 1rem;
    }
  }
`;
