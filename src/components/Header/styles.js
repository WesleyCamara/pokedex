import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.primary};
  height: 12rem;
  padding: 1rem;

  @media screen and (max-width: 1024px) {
    height: 15rem;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  input,
  button {
    padding: 1rem;
    border-radius: 0.625rem;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background};
    font-size: 1rem;
    margin: 0.5rem 1rem;
    transition: 0.2s;
  }

  input {
    width: 30vw;

    @media screen and (max-width: 1024px) {
      order: 2;
      width: 90vw;
    }
  }

  button {
    width: 10rem;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors.background};
      background: ${(props) => props.theme.colors.secondary};
    }

    @media screen and (max-width: 1024px) {
      order: 1;
    }
  }
`;
