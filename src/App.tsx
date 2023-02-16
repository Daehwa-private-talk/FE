import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { MENUS } from './constants/menu';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Main>
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
      </Main>
    </ThemeProvider>
  );
};

export default App;

const Main = styled('main')`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.purple};
`;
