import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { MENUS } from './constants/menu';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';

const App: React.FC = () => {
  return (
    <main>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            {MENUS.map(({ path, component, children }) => {
              if (children) {
                return children.map(({ path: _path, component }) => (
                  <Route
                    key={_path}
                    path={`${path}/${_path}`}
                    element={component?.()}
                  />
                ));
              }

              return <Route key={path} path={path} element={component?.()} />;
            })}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </main>
  );
};

export default App;
