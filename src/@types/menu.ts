interface MenuInterface {
  title: string;
  path: string;
  component?: (e?: any) => JSX.Element;
  children?: MenusType;
}

export type MenusType = MenuInterface[];
