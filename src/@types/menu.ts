import { ReactElement } from 'react';

interface MenuInterface {
  title: string;
  path: string;
  component?: ReactElement;
  children?: MenusType;
}

export type MenusType = MenuInterface[];
