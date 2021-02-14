import styled, { css } from 'styled-components';
import { ReactComponent as Filter } from '../../assets/img/filter.svg';

export const FilterTypesWrapper = styled.div`
  padding: 1rem;
  width: 20em;
  border-radius: 0.625rem;
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
  font-size: 1rem;
  margin: 0.5rem 1rem;
  position: relative;

  div:nth-child(1) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    white-space: nowrap;
    cursor: pointer;
  }

  div:nth-child(2) {
    opacity: 0;
    pointer-events: none;
    display: flex;
    flex-direction: column;
    position: absolute;
    background: ${(props) => props.theme.colors.background};
    top: 2.7rem;
    left: 0;
    width: 100%;
    height: 50vh;
    font-size: 1rem;
    overflow-y: scroll;
    overflow-x: inherit;
    border-top: 1px solid ${(props) => props.theme.colors.primary};
    z-index: 1;
    transition: 0.2s;

    ${(props) =>
      props.showTypes &&
      css`
        opacity: 1;
        pointer-events: initial;
      `};
  }
`;

export const FilterIcon = styled(Filter)`
  * {
    stroke: ${(props) => props.theme.colors.primary};
    fill: ${(props) => props.theme.colors.primary};
  }
`;

export const Label = styled.label`
  padding: 0.6rem 1rem;
  cursor: pointer;
  transition: 0.2s;
  border-bottom: 1px solid ${(props) => props.theme.colors.secondaryLight};

  input {
    display: none;
  }

  ${(props) =>
    props.selected &&
    css`
      background: ${(props) => props.theme.colors.secondary};
      color: ${(props) => props.theme.colors.background};
    `};
`;
