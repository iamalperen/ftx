import styled from 'styled-components';
import { Container } from '../../styles/common';
import { CollectionsListLoading, StyledSpinner } from '../Collections/Collections.styles';
import { CollectionDetailWrapper } from '../CollectionDetail/CollectionDetail.styles';

const NFTDetailWrapper = styled(CollectionDetailWrapper)``;

const NFTDetailContainer = styled(Container)``;

const NFTDetailsHeader = styled.div`
  background: ${(props) => (props.theme.background.secondary)};
  padding: 30px 0;
`;

const NFTDetailHeaderTitle = styled.h1`
  margin: 0
`;

const NFTDetailHeaderDescription = styled.h2`
  font-size: 14px;
  font-weight: 400;
`;

const NFTDetailsBody = styled.div`
  box-sizing: border-box;
  padding: 30px 0;
`;

const NFTDetailLoading = styled(CollectionsListLoading)``;

const NFTDetailSpinner = styled(StyledSpinner)``;

export {
  NFTDetailWrapper,
  NFTDetailContainer,
  NFTDetailLoading,
  NFTDetailSpinner,
  NFTDetailsHeader,
  NFTDetailHeaderTitle,
  NFTDetailHeaderDescription,
  NFTDetailsBody,
};