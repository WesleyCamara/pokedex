import { ThemeProvider } from 'styled-components';
import light from './styles/themes/light';
import GlobalStyle from './styles/global';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  );
}

export default App;
