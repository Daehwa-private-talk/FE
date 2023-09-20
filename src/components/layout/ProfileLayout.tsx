import styled, { css } from 'styled-components';

import React from 'react';
import { Profile } from '../profile/Profile';
import { UserType } from '@/@types/user';

interface Props {
  userInfo: UserType;
  isOpenSidebar: boolean;
  chatCount: number;
  onClickChat: () => void;
  onClickSignOut: () => void;
  children?: React.ReactNode;
}

export const ProfileLayout = ({
  userInfo,
  isOpenSidebar,
  chatCount,
  onClickChat,
  onClickSignOut,
  children,
}: Props) => {
  return (
    <Wrapper open={isOpenSidebar}>
      <MainContainer>
        <Header>
          <Logo>DAE:HWA</Logo>

          <Nav>
            <NavItem>
              <NavItemButton onClick={onClickChat}>대화</NavItemButton>
              <Count>{chatCount}</Count>
            </NavItem>
            <NavItem>
              <NavSignOutButton onClick={onClickSignOut}>
                로그아웃
              </NavSignOutButton>
            </NavItem>
          </Nav>
        </Header>
        {children}
      </MainContainer>
      <SideMenu>
        <Profile userInfo={userInfo} />
      </SideMenu>
    </Wrapper>
  );
};

const Wrapper = styled('section')<{ open: boolean }>`
  width: 100%;
  height: 100%;
  display: grid;
  background-color: ${({ theme }) => theme.colors.white};

  ${({ open }) => {
    if (open) {
      return css`
        grid-template-columns: 1fr 500px;
      `;
    }
  }}
`;

const MainContainer = styled('div')`
  width: 100%;
  height: 100%;
`;

const Header = styled('header')`
  width: 100%;
  height: 80px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${({ theme }) => theme.spacing(20)};
  background-color: ${({ theme }) => theme.colors.purple};
  box-shadow: 0px 1px 2.5px rgba(30, 30, 30, 0.5);
`;

const Logo = styled('h1')`
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.yellow};
`;

const Nav = styled('nav')`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(20)};
`;

const NavItem = styled('div')`
  display: inline-flex;
  cursor: pointer;
`;

const NavItemButton = styled('button')`
  color: ${({ theme }) => theme.colors.white};
  background: none;
  font-size: 19px;
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
`;

const NavSignOutButton = styled('button')`
  color: ${({ theme }) => theme.colors.white};
  background: none;
  font-size: 19px;
  padding: ${({ theme }) => `${theme.spacing(2)} ${theme.spacing(4)}`};
`;

const Count = styled('span')`
  height: 34px;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(2)}`};
  text-align: center;
  display: flex;
  align-items: center;
`;

const SideMenu = styled('aside')`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.purple};
  box-shadow: -2px 0px 4px rgba(30, 30, 30, 0.3);
`;
