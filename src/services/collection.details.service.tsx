import { GET_NFT_LIST_URL } from '../constants';

async function getCollectionDetails(startInclusive = 0, endExclusive = 24, collectionName = ''): Promise<any> {
  const url = `${GET_NFT_LIST_URL}?startInclusive=${startInclusive}&endExclusive=${endExclusive}&nft_filter_string={"collection":"${collectionName}"}`;
  return fetch(url);
}

export { getCollectionDetails };