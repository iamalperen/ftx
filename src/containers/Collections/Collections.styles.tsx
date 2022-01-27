import styled, { keyframes } from 'styled-components';
import { Container } from '../../styles/common';

const CollectionsWrapper = styled.div`
  min-height: calc(100vh - 76px);
  width: 100%;
  color: ${(props) => props.theme.color.primary};
  background-color: ${(props) => props.theme.background.primary};
  display: flex;
  flex-direction: column;
`;

const CollectionsContainer = styled(Container)``;

const CollectionsHeader = styled.div`
  background: ${(props) => (props.theme.background.secondary)};
  padding: 30px 0;
`;

const CollectionsHeaderTitle = styled.h1`
  margin: 0
`;

const CollectionsHeaderDescription = styled.h2`
  font-size: 14px;
  font-weight: 400;
`;

const CollectionsBody = styled.div`
  box-sizing: border-box;
  padding: 30px 0;
`;

const CollectionsListLoading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  width: 50px;
  height: 50px;

  & .path {
    stroke: #008aff;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export {
  CollectionsWrapper,
  CollectionsContainer,
  CollectionsHeader,
  CollectionsHeaderTitle,
  CollectionsHeaderDescription,
  CollectionsBody,
  StyledSpinner,
  CollectionsListLoading,
};