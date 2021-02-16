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

  ::before {
    content: '+';
    font-size: 2rem;
    color: white;
    bottom: 0.5rem;
    right: 1rem;
    position: absolute;
  }
`;
