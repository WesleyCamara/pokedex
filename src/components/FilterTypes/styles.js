import styled, { css } from 'styled-components';
import { ReactComponent as Filter } from '../../assets/img/filter.svg';

export const FilterTypesWrapper = styled.div`
  padding: 1rem;
  width: 40rem;
  border-radius: 0.625rem;
  color: var(--color-text);
  background: var(--color-light);
  font-size: 1rem;
  margin: 0.5rem 1rem;
  position: relative;

  div:nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    position: absolute;
    background: var(--color-light);
    top: 2.7rem;
    left: 0;
    width: 100%;
    height: 50vh;
    font-size: 1rem;
    overflow-y: scroll;
    overflow-x: inherit;

    border-top: 1px solid var(--color-primary);
    z-index: 1;
  }

  /* label {
    padding: 0.5rem 1rem;
    margin: 0.1rem 0;
    cursor: pointer;

    &:hover {
      background: blue;
    }
  }

  input {
    display: none;
  } */
`;

export const FilterIcon = styled(Filter)`
  * {
    stroke: var(--color-primary);
    fill: var(--color-primary);
  }
`;

export const Label = styled.label`
  padding: 0.5rem 1rem;
  margin: 0.1rem 0;
  cursor: pointer;
  transition: 0.2s;

  input {
    display: none;
  }

  ${(props) =>
    props.selected &&
    css`
      background: var(--color-primary);
    `};
`;
