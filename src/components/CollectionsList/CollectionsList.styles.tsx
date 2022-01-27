import styled from 'styled-components';

const CollectionsListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 30px;
  row-gap: 30px;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const CollectionsListCard = styled.div`
  border: 1px solid ${(props) => (props.theme.mode === 'dark' ? '#2c4056' : '#eaecf3')};
  border-radius: 8px;
  box-shadow: 0 0 1.25rem rgb(31 45 61 / 5%);
  background: ${(props) => (props.theme.mode === 'dark' ? '#253649' : '#fff')};
  padding: 20px;

  a {
    display: block;
    width: 100%;
    height: auto;
    text-decoration: none;
    color: inherit;
  }
`;

const CollectionsListCardImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 240px;
  margin-bottom: 8px;
`;

const CollectionsListCardImg = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  width: 100%;
  max-height: 100%;
`;

const CollectionsListCardDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const CollectionsListCardTitle = styled.h4`
  margin: 0;
  font-size: 16px;
`;

const CollectionsListCardItemNum = styled.h5`
  font-size: 12px;
  margin: 4px 0 0 0;
  font-weight: 400;
`;

export {
  CollectionsListWrapper,
  CollectionsListCard,
  CollectionsListCardImgContainer,
  CollectionsListCardImg,
  CollectionsListCardDetails,
  CollectionsListCardTitle,
  CollectionsListCardItemNum,
};