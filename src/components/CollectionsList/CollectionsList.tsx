import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { Collection } from '../../models';
import * as S from './CollectionsList.styles';

interface CollectionsListProps {
  collections: Collection[];
}

const CollectionsList: FC<CollectionsListProps> = ({ collections }) => (
  <S.CollectionsListWrapper data-testid='CollectionsList'>
    {collections.map(collection => (
      <S.CollectionsListCard>
        <Link to={`/collection-detail/${'alperen-test'}`}>
          <S.CollectionsListCardImgContainer>
            <S.CollectionsListCardImg src={collection?.first_nft?.imageUrl} />
          </S.CollectionsListCardImgContainer>
          <S.CollectionsListCardDetails>
            <S.CollectionsListCardTitle>{collection?.collectionDict?.displayName}</S.CollectionsListCardTitle>
            <S.CollectionsListCardItemNum>{collection?.total} Item{collection?.total > 1 ? 's' : ''}</S.CollectionsListCardItemNum>
          </S.CollectionsListCardDetails>
        </Link>
      </S.CollectionsListCard>
    ))}
  </S.CollectionsListWrapper>
);

export default CollectionsList;
