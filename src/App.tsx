import { PrivateRoute, PublicRoute } from '@/components/auth';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import { PRIVATE_MENUS, PUBLIC_MENUS } from '@/constants/menus';
import NotFound from '@/domain/404';
import { daehwaStore } from '@/store';
import GlobalStyle from '@/styles/globalStyle';
import theme from '@/styles/theme';
import { Provider } from 'jotai';
import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />

      <ErrorBoundary>
        <Provider store={daehwaStore}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />

            <Main>
              <Routes>
                {PUBLIC_MENUS.map(({ path, component, children }) => {
                  if (children) {
                    return children.map(({ path: _path, component }) => (
                      <Route
                        key={_path}
                        path={`${path}${_path}`}
                        element={<PublicRoute component={component} />}
                      />
                    ));
                  }

                  return (
                    <Route
                      key={path}
                      path={path}
                      element={<PublicRoute component={component} />}
                    />
                  );
                })}

                {PRIVATE_MENUS.map(({ path, component, children }) => {
                  if (children) {
                    return children.map(({ path: _path, component }) => (
                      <Route
                        key={_path}
                        path={`${path}${_path}`}
                        element={<PrivateRoute component={component} />}
                      />
                    ));
                  }

                  return (
                    <Route
                      key={path}
                      path={path}
                      element={<PrivateRoute component={component} />}
                    />
                  );
                })}

                <Route path="/*" element={<NotFound />} />
              </Routes>
            </Main>
          </ThemeProvider>
        </Provider>
      </ErrorBoundary>
    </BrowserRouter>
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
