import { ReactElement } from 'react';
import { Control } from 'react-hook-form';

export interface SignIn {
  email: string;
  password: string;
}

export interface SignInFormType {
  control: Control<SignIn>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

export interface RouteComponentType {
  component?: ReactElement;
}
