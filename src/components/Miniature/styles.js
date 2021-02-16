import styled from 'styled-components';

export const MiniatureCard = styled.div`
  display: grid;
  place-items: center;
  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primaryLight};
  padding: 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 1.5rem;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;

  ::before {
    content: '+';
    font-size: 2rem;
    color: white;
    bottom: 0.5rem;
    right: 1rem;
    position: absolute;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 25%) 10px 10px 30px;
    transform: scale(1.04);
  }

  h2 {
    text-transform: capitalize;
  }
`;
