import { HomeProps } from '@/@types/home';
import AuthButton from '@/components/auth/AuthButton';
import { Ballon } from '@/components/auth/Ballon';

import styled from 'styled-components';

export const HomeView = ({ onClickSignIn, onClickSignUp }: HomeProps) => {
  return (
    <section>
      <Ballon>
        <Header>" 대화하기 "</Header>
      </Ballon>
      <ButtonContainer>
        <AuthButton onClick={onClickSignIn}>로그인</AuthButton>
        <AuthButton onClick={onClickSignUp}>회원가입</AuthButton>
      </ButtonContainer>
    </section>
  );
};

const ButtonContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  margin-top: ${({ theme }) => theme.spacing(20)};
`;

const Header = styled('header')`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.dark};
`;
