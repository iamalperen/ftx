import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CollectionDetail from './CollectionDetail';

describe('<CollectionDetail />', () => {
  test('it should mount', () => {
    render(<CollectionDetail />);
    
    const collectionDetail = screen.getByTestId('CollectionDetail');

    expect(collectionDetail).toBeInTheDocument();
  });
});