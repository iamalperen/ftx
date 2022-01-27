import styled from 'styled-components';
import { Container } from '../../styles';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 76px;
  color: #fff;
  background-color: #1f2d3d;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
`;

const HeaderLogo = styled.div``;

const HeaderLogoLink = styled.a`
  display: block;
  outline: none;
  text-decoration: none;
`;

const HeaderLogoImg = styled.img`
  width: 100%;
  max-width: 120px;
  height: auto;
`;

const HeaderThemeSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export {
  HeaderWrapper,
  HeaderContainer,
  HeaderLogo,
  HeaderThemeSwitch,
  HeaderLogoLink,
  HeaderLogoImg,
};
