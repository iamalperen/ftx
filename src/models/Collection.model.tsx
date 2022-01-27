import { NFT } from './NFT.model';
import { NFTIssuer } from './NFTIssuer.model';
import { NFTCollectionDict } from './NFTCollectionDict.model';

export interface Collection {
  group_type: string;
  group_id: string;
  total: number;
  volume: number;
  first_nft: NFT;
  issuer: NFTIssuer;
  collectionDict?: NFTCollectionDict;
}
