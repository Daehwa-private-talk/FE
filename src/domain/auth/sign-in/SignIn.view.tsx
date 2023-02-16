import { SignInFormType } from '@/@types/auth';
import { AuthButton, Balloon } from '@/components/auth';
import { AuthTextInput } from '@/components/auth/AuthInput';
import styled from 'styled-components';

export const SignInView = ({ control, onSubmit }: SignInFormType) => {
  return (
    <Form onSubmit={onSubmit}>
      <Header>
        <Balloon>
          <Title>로그인 하기</Title>
        </Balloon>
      </Header>
      <InputContainer>
        <Label>이메일</Label>
        <AuthTextInput name="email" control={control} placeholder="이메일" />
      </InputContainer>
      <InputContainer>
        <Label>비밀번호</Label>
        <AuthTextInput
          name="password"
          type="password"
          control={control}
          placeholder="비밀번호"
        />
      </InputContainer>
      <AuthButton width={300}>로그인</AuthButton>
    </Form>
  );
};

const Form = styled('form')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(5)};
`;

const Header = styled('header')`
  margin-bottom: ${({ theme }) => theme.spacing(10)};
`;

const Title = styled('h4')`
  font-size: 1rem;
  font-weight: 700;
`;

const InputContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
`;

const Label = styled('label')`
  font-size: 0.8rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.white};
`;
