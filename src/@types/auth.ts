import { ReactElement } from 'react';
import { Control, FieldErrors } from 'react-hook-form';

export interface SignIn {
  email: string;
  password: string;
}

export interface SignUpSchema {
  name: string;
  email: string;
  birthday: string;
  password: string;
  confirmPassword: string;
}

export type SignUp = Omit<SignUpSchema, 'confirmPassword'>;

export interface SignInFormType {
  control: Control<SignIn>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  errors: FieldErrors<SignIn>;
}

export interface SignUpFormType {
  control: Control<SignUpSchema>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  errors: FieldErrors<SignUpSchema>;
}

export interface RouteComponentType {
  component?: ReactElement;
}
