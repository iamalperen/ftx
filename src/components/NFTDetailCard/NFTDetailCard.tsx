import React, { FC } from 'react';
import { NFT } from '../../models';
import * as S from './NFTDetailCard.styles';

interface NFTDetailCardProps {
  nft: NFT | any;
}

const NFTDetailCard: FC<NFTDetailCardProps> = ({ nft }) => (
  <S.NFTDetailCardWrapper data-testid='NFTDetailCard'>
    <S.NFTDetailCardImgContainer>
      <S.NFTDetailCardImage src={nft.imageUrl} alt={nft.description} />
    </S.NFTDetailCardImgContainer>
    <S.NFTDetailCardDataContainer>
      {nft.name && <S.NFTDetailCardDataAttributeTitle>Name</S.NFTDetailCardDataAttributeTitle>}
      <S.NFTDetailCardDataAttributeValue>{nft.name}</S.NFTDetailCardDataAttributeValue>
      {nft.issuer && <S.NFTDetailCardDataAttributeTitle>Issuer</S.NFTDetailCardDataAttributeTitle>}
      <S.NFTDetailCardDataAttributeValue>{nft.issuer}</S.NFTDetailCardDataAttributeValue>
      {nft.description && <S.NFTDetailCardDataAttributeTitle>Description</S.NFTDetailCardDataAttributeTitle>}
      <S.NFTDetailCardDataAttributeValue>{nft.description}</S.NFTDetailCardDataAttributeValue>
      {nft.collection && <S.NFTDetailCardDataAttributeTitle>Collection</S.NFTDetailCardDataAttributeTitle>}
      <S.NFTDetailCardDataAttributeValue>{nft.collection}</S.NFTDetailCardDataAttributeValue>
      {nft.series && <S.NFTDetailCardDataAttributeTitle>Series</S.NFTDetailCardDataAttributeTitle>}
      <S.NFTDetailCardDataAttributeValue>{nft.series}</S.NFTDetailCardDataAttributeValue>
      {nft.offerPrice && <S.NFTDetailCardDataAttributeTitle>Price</S.NFTDetailCardDataAttributeTitle>}
      <S.NFTDetailCardDataAttributeValue>{nft.offerPrice} {nft.quoteCurrency}</S.NFTDetailCardDataAttributeValue>
      {nft.redeemable !== undefined && <S.NFTDetailCardDataAttributeTitle>Redeemable</S.NFTDetailCardDataAttributeTitle>}
      <S.NFTDetailCardDataAttributeValue>{nft.redeemable ? 'Yes' : 'No'}</S.NFTDetailCardDataAttributeValue>
    </S.NFTDetailCardDataContainer>
  </S.NFTDetailCardWrapper>
);

export default NFTDetailCard;
