import { GET_NFTS_URL } from '../constants';

async function getCollectionDetails(startInclusive = 0, endExclusive = 24, collectionName = ''): Promise<any> {
  const url = `${GET_NFTS_URL}?startInclusive=${startInclusive}&endExclusive=${endExclusive}&nft_filter_string={"collection":"${collectionName}"}`;
  return fetch(url);
}

export { getCollectionDetails };