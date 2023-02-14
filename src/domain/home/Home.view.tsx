import AuthButton from '@/components/auth/AuthButton';
import styled from 'styled-components';

export const HomeView = () => {
  return (
    <Section>
      <Header>" 대화 "</Header>
      <ButtonContainer>
        <AuthButton>로그인</AuthButton>
        <AuthButton>회원가입</AuthButton>
      </ButtonContainer>
    </Section>
  );
};

const Section = styled('section')`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.purple};
`;

const ButtonContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(5)};
  margin-top: ${({ theme }) => theme.spacing(20)};
`;

const Header = styled('header')`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;
