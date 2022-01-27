import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CollectionsList from './CollectionsList';

describe('<CollectionsList />', () => {
  test('it should mount', () => {
    render(<CollectionsList />);
    
    const collectionsList = screen.getByTestId('CollectionsList');

    expect(collectionsList).toBeInTheDocument();
  });
});