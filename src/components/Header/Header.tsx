import React, { FC, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { BsMoon, BsSun } from 'react-icons/bs';
import logoDark from '../../assets/logo-dark.png';
import logoLight from '../../assets/logo-light.png';
import * as S from './Header.styles';

interface HeaderProps {
  switchTheme: Function;
}

const Header: FC<HeaderProps> = ({ switchTheme }) => {
  const { mode } = useContext(ThemeContext);

  return (
    <S.HeaderWrapper data-testid='Header'>
      <S.HeaderContainer>
        <S.HeaderLogo>
          <S.HeaderLogoLink href="/">
            {mode === 'dark' && (
              <S.HeaderLogoImg src={logoDark} alt='FTX NFT Marketplace' />
            )}
            {mode === 'light' && (
              <S.HeaderLogoImg src={logoLight} alt='FTX NFT Marketplace' />
            )}
          </S.HeaderLogoLink>
        </S.HeaderLogo>
        <S.HeaderThemeSwitch onClick={() => switchTheme()}>
          {mode === 'dark' && <BsSun />}
          {mode === 'light' && <BsMoon />}
        </S.HeaderThemeSwitch>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  );
};

export default Header;
