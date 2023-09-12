import initialProfileUrl from '@/assets/images/initialProfile.svg';
import React from 'react';
import styled from 'styled-components';

interface Props {
  profileImage?: string;
  name: string;
  statusMessage?: string;
}

export const Profile = ({ profileImage, name, statusMessage }: Props) => {
  return (
    <React.Fragment>
      <ProfileContainer>
        <ImageContainer>
          <source type="image/webp" srcSet={initialProfileUrl} />
          <Image
            loading="lazy"
            sizes="(max-width: 350px)"
            decoding="async"
            src={profileImage}
            alt="profile"
          />
        </ImageContainer>
      </ProfileContainer>
      <ProfileContentContainer>
        <Name>{name}</Name>
        <StatusMessageContainer>
          <StatusMessage>{statusMessage}</StatusMessage>
          <StatusEditButton>편집</StatusEditButton>
        </StatusMessageContainer>
      </ProfileContentContainer>
    </React.Fragment>
  );
};

const ProfileContainer = styled('article')`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${({ theme }) => theme.spacing(40)} 0
    ${({ theme }) => theme.spacing(20)};
`;

const ImageContainer = styled('picture')`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 8px solid ${({ theme }) => theme.colors.yellow};
  background-color: ${({ theme }) => theme.colors.yellow};
`;

const Image = styled('img')``;

const ProfileContentContainer = styled('div')`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
`;

const Name = styled('h4')`
  font-size: 32px;
`;

const StatusMessageContainer = styled('div')`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing(7)} 0;
  padding-bottom: ${({ theme }) => theme.spacing(8)};
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
  gap: ${({ theme }) => theme.spacing(5)};
  width: 400px;
`;

const StatusMessage = styled('p')`
  font-size: 18px;
  width: fit-content;
  max-width: 340px;
  word-wrap: break-word;
`;

const StatusEditButton = styled('button')`
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.white};
  width: 50px;
  height: 26px;
  border-radius: 13px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0.5px);
  }
`;
