import React, { FC, useEffect, useState } from 'react';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Pagination } from '@zendeskgarden/react-pagination';
import { CollectionsList, CollectionsTopFilters } from '../../components';
import { COLLECTION_TOP_FILTERS, ITEMS_PER_PAGE } from '../../constants';
import { getCollections } from '../../services';
import * as S from './Collections.styles';

interface CollectionsProps {
}

const Collections: FC<CollectionsProps> = () => {
  const [filter, setFilter] = useState(COLLECTION_TOP_FILTERS.ALL);
  const [collections, setCollections] = useState([]);
  const [isCollectionsLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const fetchCollections = async (start: number | undefined, end: number | undefined, collectionType: string | undefined) => {
    const response = await getCollections(start, end, collectionType);
    const data = await response.json();
    setTotalPages(Math.ceil(data.result.count / ITEMS_PER_PAGE));
    setCollections(data.result.collections);
    setIsLoading(false);
  };

  useEffect(() => {
    setPage(1);
  }, [filter]);

  useEffect(() => {
    setIsLoading(true);
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    fetchCollections(start, end, filter);
  }, [page, filter]);

  const showCollectionsHeader = (): object => (
    <S.CollectionsHeader>
      <S.CollectionsContainer>
        <S.CollectionsHeaderTitle>NFT Collections</S.CollectionsHeaderTitle>
        <S.CollectionsHeaderDescription>Welcome FTX NFT Collections Page</S.CollectionsHeaderDescription>
      </S.CollectionsContainer>
    </S.CollectionsHeader>
  );

  const showLoadingSpinner = (): object => (
    <S.CollectionsListLoading>
      <S.StyledSpinner viewBox='0 0 50 50'>
        <circle className='path' cx='25' cy='25' r='20' fill='none' strokeWidth='6' />
      </S.StyledSpinner>
    </S.CollectionsListLoading>
  );

  const showPagination = (): object => (
    <ThemeProvider>
      <p />
      <Pagination
        totalPages={totalPages}
        currentPage={page}
        onChange={(currentPage) => setPage(currentPage)}
      />
      <p />
    </ThemeProvider>
  );

  const showCollectionsBody = (): object => (
    <S.CollectionsBody>
      <S.CollectionsContainer>
        <CollectionsTopFilters filter={filter} setFilter={setFilter} />
        {!isCollectionsLoading && (<CollectionsList collections={collections} />)}
        {!isCollectionsLoading && collections.length > 0 && showPagination()}
        {isCollectionsLoading && showLoadingSpinner()}
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
