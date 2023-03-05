import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface Props<T extends FieldValues> extends TextInputProps {
  name: string;
  control: Control<T>;
}

export const AuthTextInput = function <T extends FieldValues>({
  name,
  control,
  value,
  placeholder,
  onChange,
  ...textInputProps
}: Props<T>) {
  return (
    <Controller
      control={control}
      name={name as Path<T>}
      render={({ field }) => (
        <Input
          {...textInputProps}
          {...field}
          value={value}
          placeholder={placeholder}
          onChange={(e) => {
            field.onChange(e);
            onChange?.(e);
          }}
        />
      )}
    />
  );
};

const Input = styled('input')`
  width: 320px;
  height: 48px;
  padding: ${({ theme }) => theme.spacing(4)};
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 1.05rem;
  border-radius: 5px;

  &::placeholder {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.gray};
  }

  &:focus::placeholder {
    opacity: 0;
  }
`;
