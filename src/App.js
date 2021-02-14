import { ThemeProvider } from 'styled-components';
import { GlobalStorage } from './GlobalContext';

import light from './styles/themes/light';
import GlobalStyle from './styles/global';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStorage>
        <GlobalStyle />
        <Home />
      </GlobalStorage>
    </ThemeProvider>
  );
}

export default App;
