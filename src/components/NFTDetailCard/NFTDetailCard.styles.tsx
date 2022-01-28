import styled from 'styled-components';

const NFTDetailCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 30px;
  row-gap: 30px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const NFTDetailCardImgContainer = styled.div``;

const NFTDetailCardImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  width: 100%;
  max-height: 100%;
`;

const NFTDetailCardDataContainer = styled.div`
`;

const NFTDetailCardDataAttributeTitle = styled.h4`
  font-size: 20px;
  margin: 12px 0;
`;

const NFTDetailCardDataAttributeValue = styled.div`
  font-size: 16px;
`;

export {
  NFTDetailCardWrapper,
  NFTDetailCardImgContainer,
  NFTDetailCardImage,
  NFTDetailCardDataContainer,
  NFTDetailCardDataAttributeTitle,
  NFTDetailCardDataAttributeValue,
};