import React from 'react';
import styled from 'styled-components';

interface Props {
  onClick?: () => void;
  children?: React.ReactNode;
}

export const AuthButton = ({ onClick, children }: Props) => {
  return <Button onClick={onClick}>{children}</Button>;
};

const Button = styled('button')`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.yellow};
  width: 230px;
  height: 50px;
  border-radius: 25px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 1px 3px 0px rgba(30, 30, 30, 0.7);
  }

  &:active {
    transform: translateY(0px);
    box-shadow: none;
  }
`;
