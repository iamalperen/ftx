import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Pagination } from '@zendeskgarden/react-pagination';
import * as S from './CollectionDetail.styles';
import { getCollectionDetails } from '../../services/collection.details.service';
import { CollectionDetailNFTList } from '../../components';
import { ITEMS_PER_PAGE } from '../../constants';

interface CollectionDetailProps {
}

const CollectionDetail: FC<CollectionDetailProps> = () => {
  const [isCollectionDetailLoading, setIsLoading] = useState(true);
  const [nftList, setNFTList] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const params = useParams();
  const collectionName = params.name;

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const fetchCollectionDetails = async (start: number | undefined, end: number | undefined, collection: string | undefined) => {
    const response = await getCollectionDetails(start, end, collection);
    const data = await response.json();
    setTotalPages(Math.ceil(data.result.total / ITEMS_PER_PAGE));
    setNFTList(data.result.nfts);
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    fetchCollectionDetails(start, end, collectionName);
  }, [page]);

  const showCollectionDetailsHeader = (): object => (
    <S.CollectionDetailsHeader>
      <S.CollectionDetailContainer>
        <S.CollectionDetailHeaderTitle>{collectionName}</S.CollectionDetailHeaderTitle>
        <S.CollectionDetailHeaderDescription>NFT Collection Detail Page</S.CollectionDetailHeaderDescription>
      </S.CollectionDetailContainer>
    </S.CollectionDetailsHeader>
  );

  const showLoadingSpinner = (): object => (
    <S.CollectionDetailLoading>
      <S.CollectionDetailSpinner viewBox='0 0 50 50'>
        <circle className='path' cx='25' cy='25' r='20' fill='none' strokeWidth='6' />
      </S.CollectionDetailSpinner>
    </S.CollectionDetailLoading>
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

  const showCollectionDetailsBody = (): object => (
    <S.CollectionDetailsBody>
      <S.CollectionDetailContainer>
        {!isCollectionDetailLoading && <CollectionDetailNFTList nfts={nftList} />}
        {!isCollectionDetailLoading && nftList.length > 0 && showPagination()}
        {isCollectionDetailLoading && showLoadingSpinner()}
      </S.CollectionDetailContainer>
    </S.CollectionDetailsBody>
  );

  return (
    <S.CollectionDetailWrapper data-testid='CollectionDetail'>
      {showCollectionDetailsHeader()}
      {showCollectionDetailsBody()}
    </S.CollectionDetailWrapper>
  );
};

export default CollectionDetail;
