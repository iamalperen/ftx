import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NFTDetail from './NFTDetail';

describe('<NFTDetail />', () => {
  test('it should mount', () => {
    render(<NFTDetail />);
    
    const nftDetail = screen.getByTestId('NFTDetail');

    expect(nftDetail).toBeInTheDocument();
  });
});