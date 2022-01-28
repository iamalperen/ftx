import { GET_NFT_DETAIL_URL } from '../constants';

async function getNFTDetail(nftId: string | undefined): Promise<any> {
  const url = `${GET_NFT_DETAIL_URL}${nftId}`;
  return fetch(url);
}

export { getNFTDetail };