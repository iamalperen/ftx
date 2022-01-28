import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNFTDetail } from '../../services/nft.detail.service';
import * as S from './NFTDetail.styles';
import { NFTDetailCard } from '../../components';

interface NFTDetailProps {
}

const NFTDetail: FC<NFTDetailProps> = () => {
  const [nft, setNFT] = useState({});
  const [isNFTDetailLoading, setIsNFTDetailLoading] = useState(false);
  const params = useParams();
  const nftId = params.id;
  const nftName = params.name;

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const fetchNFTDetail = async (nId: string | undefined) => {
    const response = await getNFTDetail(nId);
    const data = await response.json();
    setNFT(data.result);
    setIsNFTDetailLoading(false);
  };

  useEffect(() => {
    setIsNFTDetailLoading(true);
    fetchNFTDetail(nftId);
  }, [params]);


  const showLoadingSpinner = (): object => (
    <S.NFTDetailLoading>
      <S.NFTDetailSpinner viewBox='0 0 50 50'>
        <circle className='path' cx='25' cy='25' r='20' fill='none' strokeWidth='6' />
      </S.NFTDetailSpinner>
    </S.NFTDetailLoading>
  );

  const showNFTDetailsHeader = (): object => (
    <S.NFTDetailsHeader>
      <S.NFTDetailContainer>
        <S.NFTDetailHeaderTitle>{nftName}</S.NFTDetailHeaderTitle>
        <S.NFTDetailHeaderDescription>NFT Detail Page</S.NFTDetailHeaderDescription>
      </S.NFTDetailContainer>
    </S.NFTDetailsHeader>
  );

  const showNFTDetailsBody = (): object => (
    <S.NFTDetailsBody>
      <S.NFTDetailContainer>
        {!isNFTDetailLoading && <NFTDetailCard nft={nft} />}
        {isNFTDetailLoading && showLoadingSpinner()}
      </S.NFTDetailContainer>
    </S.NFTDetailsBody>
  );

  return (
    <S.NFTDetailWrapper data-testid='NFTDetail'>
      {showNFTDetailsHeader()}
      {showNFTDetailsBody()}
    </S.NFTDetailWrapper>
  );
};

export default NFTDetail;
