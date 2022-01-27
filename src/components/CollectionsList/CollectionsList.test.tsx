import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CollectionsList from './CollectionsList';
import { Collection } from '../../models';

describe('<CollectionsList />', () => {
  test('it should mount', () => {
    const collections: Collection[] = [];

    render(<CollectionsList collections={collections} />);

    const collectionsList = screen.getByTestId('CollectionsList');

    expect(collectionsList).toBeInTheDocument();
  });
});