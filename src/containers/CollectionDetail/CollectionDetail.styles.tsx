import styled from 'styled-components';
import { Container } from '../../styles/common';
import { CollectionsListLoading, StyledSpinner } from '../Collections/Collections.styles';

const CollectionDetailWrapper = styled.div`
  min-height: calc(100vh - 76px);
  width: 100%;
  color: ${(props) => props.theme.color.primary};
  background-color: ${(props) => props.theme.background.primary};
  display: flex;
  flex-direction: column;
`;

const CollectionDetailContainer = styled(Container)``;

const CollectionDetailsHeader = styled.div`
  background: ${(props) => (props.theme.background.secondary)};
  padding: 30px 0;
`;

const CollectionDetailHeaderTitle = styled.h1`
  margin: 0
`;

const CollectionDetailHeaderDescription = styled.h2`
  font-size: 14px;
  font-weight: 400;
`;

const CollectionDetailsBody = styled.div`
  box-sizing: border-box;
  padding: 30px 0;
`;

const CollectionDetailLoading = styled(CollectionsListLoading)``;

const CollectionDetailSpinner = styled(StyledSpinner)``;

export {
  CollectionDetailWrapper,
  CollectionDetailContainer,
  CollectionDetailsHeader,
  CollectionDetailHeaderTitle,
  CollectionDetailHeaderDescription,
  CollectionDetailsBody,
  CollectionDetailLoading,
  CollectionDetailSpinner,
};