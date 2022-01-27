import { GET_NFT_COLLECTIONS_URL } from '../constants';

async function getCollections(startInclusive = 0, endExclusive = 24, collectionType = 'all'): Promise<any> {
  const url = `${GET_NFT_COLLECTIONS_URL}?startInclusive=${startInclusive}&endExclusive=${endExclusive}&collectionType=${collectionType}`;
  return fetch(url);
}

export { getCollections };