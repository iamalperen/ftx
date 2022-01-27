import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { NFT } from '../../models';
import CollectionDetailNFTList from './CollectionDetailNFTList';

describe('<CollectionDetailNFTList />', () => {
  test('it should mount', () => {
    const nftList: NFT[] = [];
    render(<CollectionDetailNFTList nfts={nftList} />);

    const collectionDetailNftList = screen.getByTestId('CollectionDetailNFTList');

    expect(collectionDetailNftList).toBeInTheDocument();
  });
});