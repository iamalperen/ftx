import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NFTDetailCard from './NFTDetailCard';

describe('<NFTDetailCard />', () => {
  test('it should mount', () => {
    const nft = undefined;
    // @ts-ignore
    render(<NFTDetailCard nft={nft} />);

    const nftDetailCard = screen.getByTestId('NFTDetailCard');

    expect(nftDetailCard).toBeInTheDocument();
  });
});