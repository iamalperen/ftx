import styled from 'styled-components';
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

export {
  CollectionsWrapper,
  CollectionsContainer,
  CollectionsHeader,
  CollectionsHeaderTitle,
  CollectionsHeaderDescription,
  CollectionsBody,
};