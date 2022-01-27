import React, { FC } from 'react'
/** import { BsMoon, BsSun } from 'react-icons/bs' */
import { BsSun } from 'react-icons/bs'
import * as S from './Header.styles'
import logoDark from '../../assets/logo-dark.png'

interface HeaderProps {
}

const Header: FC<HeaderProps> = () => (
  <S.HeaderWrapper data-testid='Header'>
    <S.HeaderContainer>
      <S.HeaderLogo>
        <S.HeaderLogoLink>
          <S.HeaderLogoImg src={logoDark} alt='FTX NFT Marketplace' />
        </S.HeaderLogoLink>
      </S.HeaderLogo>
      <S.HeaderThemeSwitch>
        <BsSun />
      </S.HeaderThemeSwitch>
    </S.HeaderContainer>
  </S.HeaderWrapper>
)

export default Header
