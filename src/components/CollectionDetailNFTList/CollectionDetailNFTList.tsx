import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { NFT } from '../../models';
import * as S from './CollectionDetailNFTList.styles';
import { urlEncode } from '../../common';


interface CollectionDetailNFTListProps {
  nfts: NFT[];
}

const CollectionDetailNFTList: FC<CollectionDetailNFTListProps> = ({ nfts }) => (
  <S.CollectionsDetailNFTListWrapper data-testid='CollectionDetailNFTList'>
    {
      nfts.map((nft: NFT) => (
        <S.CollectionDetailNFTCard>
          <Link to={urlEncode(`/nft-detail/${nft?.id}/${nft?.name}`)}>
            <S.CollectionDetailNFTCardImgContainer>
              <S.CollectionDetailNFTCardImg src={nft?.imageUrl} />
            </S.CollectionDetailNFTCardImgContainer>
            <S.CollectionDetailNFTCardDetails>
              <S.CollectionDetailNFTCardTitle>{nft?.name}</S.CollectionDetailNFTCardTitle>
              <S.CollectionDetailNFTCardPrice><strong>Price: </strong>{nft?.offerPrice} {nft?.quoteCurrency}
              </S.CollectionDetailNFTCardPrice>
            </S.CollectionDetailNFTCardDetails>
          </Link>
        </S.CollectionDetailNFTCard>
      ))
    }
    {nfts.length === 0 && (
      <S.CollectionsDetailNFTListNoResults>No NFT Found in Collection!</S.CollectionsDetailNFTListNoResults>
    )}
  </S.CollectionsDetailNFTListWrapper>
);

export default CollectionDetailNFTList;
