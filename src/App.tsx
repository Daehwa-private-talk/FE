import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MENUS } from './constants/menu';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {MENUS.map(({ path, component, children }) => {
          if (children) {
            return children.map(({ path, component }) => (
              <Route key={path} path={path} element={component?.()} />
            ));
          }

          return <Route key={path} path={path} element={component?.()} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
