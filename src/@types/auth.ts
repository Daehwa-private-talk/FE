import { Control } from 'react-hook-form';

export interface SignIn {
  email: string;
  password: string;
}

export interface SignInFormType {
  control: Control<SignIn>;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}
