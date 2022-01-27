import React, { FC, useEffect, useState } from 'react';
import { CollectionsList, CollectionsTopFilters } from '../../components';
import * as S from './Collections.styles';
import { COLLECTION_TOP_FILTERS } from '../../constants';

interface CollectionsProps {
}

const Collections: FC<CollectionsProps> = () => {
  const [filter, setFilter] = useState(COLLECTION_TOP_FILTERS.ALL);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  const showCollectionsHeader = (): object => (
    <S.CollectionsHeader>
      <S.CollectionsContainer>
        <S.CollectionsHeaderTitle>NFT Collections</S.CollectionsHeaderTitle>
        <S.CollectionsHeaderDescription>Welcome FTX NFT Collections Page</S.CollectionsHeaderDescription>
      </S.CollectionsContainer>
    </S.CollectionsHeader>
  );

  const showCollectionsBody = (): object => (
    <S.CollectionsBody>
      <S.CollectionsContainer>
        <CollectionsTopFilters filter={filter} setFilter={setFilter} />
        <CollectionsList />
      </S.CollectionsContainer>
    </S.CollectionsBody>
  );

  return (
    <S.CollectionsWrapper data-testid='Collections'>
      {showCollectionsHeader()}
      {showCollectionsBody()}
    </S.CollectionsWrapper>
  );
};

export default Collections;
