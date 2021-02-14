import { createGlobalStyle } from 'styled-components';
export default createGlobalStyle`

* {
  font-family: 'Rubik', sans-serif;
}

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
a,
ul {
  font-size: 1rem;
  font-weight: normal;
}

img {
  display: block;
  max-width: 100%;
}

body {
  background:  ${(props) => props.theme.colors.background};
}
`;
