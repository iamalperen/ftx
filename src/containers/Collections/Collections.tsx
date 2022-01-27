import React, { FC, useEffect, useState } from 'react';
import { CollectionsList, CollectionsTopFilters } from '../../components';
import * as S from './Collections.styles';
import { COLLECTION_TOP_FILTERS } from '../../constants';
import { getCollections } from '../../services';

interface CollectionsProps {
}

const Collections: FC<CollectionsProps> = () => {
  const [filter, setFilter] = useState(COLLECTION_TOP_FILTERS.ALL);
  const [collections, setCollections] = useState([]);
  const [isCollectionsLoading, setIsLoading] = useState(false);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const fetchCollections = async (start: number | undefined, end: number | undefined, collectionType: string | undefined) => {
    const response = await getCollections(start, end, collectionType);
    const data = await response.json();
    setCollections(data.result.collections);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchCollections(undefined, undefined, filter);
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
        {!isCollectionsLoading && (<CollectionsList collections={collections} />)}
        {isCollectionsLoading && (
          <S.CollectionsListLoading>
            <S.StyledSpinner viewBox='0 0 50 50'>
              <circle className='path' cx='25' cy='25' r='20' fill='none' strokeWidth='4' />
            </S.StyledSpinner>
          </S.CollectionsListLoading>)
        }
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
