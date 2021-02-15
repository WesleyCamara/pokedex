import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.primaryLight};
  min-height: 10rem;
  padding: 1rem;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  input,
  button {
    padding: 1rem;
    width: 40rem;
    border-radius: 0.625rem;
    color: ${(props) => props.theme.colors.text};
    background: ${(props) => props.theme.colors.background};
    font-size: 1rem;
    margin: 0.5rem 1rem;
    transition: 0.2s;
  }
  button {
    max-width: 20rem;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors.background};
      background: ${(props) => props.theme.colors.secondary};
    }
  }
`;
