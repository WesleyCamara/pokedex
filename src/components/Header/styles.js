import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background: var(--color-primary);
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
    color: var(--color-text);
    background: var(--color-light);
    font-size: 1rem;
    margin: 0.5rem 1rem;
  }
  button {
    max-width: 20rem;
    cursor: pointer;
  }
`;
