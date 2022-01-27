import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CollectionsTopFilters from './CollectionsTopFilters';
import { COLLECTION_TOP_FILTERS } from '../../constants';

describe('<CollectionsTopFilters />', () => {
  test('it should mount', () => {
    const setFilter = (): void => {
    };

    const filter = COLLECTION_TOP_FILTERS.ALL;

    render(<CollectionsTopFilters filter={filter} setFilter={setFilter} />);

    const collectionsTopFilters = screen.getByTestId('CollectionsTopFilters');

    expect(collectionsTopFilters).toBeInTheDocument();
  });
});