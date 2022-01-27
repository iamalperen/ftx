import React, { FC } from 'react';
import * as S from './CollectionsTopFilters.styles';
import { COLLECTION_TOP_FILTERS } from '../../constants';


interface CollectionsTopFiltersProps {
  filter: string;
  setFilter: Function;
}

const CollectionsTopFilters: FC<CollectionsTopFiltersProps> = ({ filter, setFilter }) => (
    <S.CollectionsTopFiltersWrapper data-testid='CollectionsTopFilters'>
      <S.CollectionsTopFilter onClick={() => setFilter(COLLECTION_TOP_FILTERS.ALL)} isSelected={filter === COLLECTION_TOP_FILTERS.ALL}>All</S.CollectionsTopFilter>
      <S.CollectionsTopFilter onClick={() => setFilter(COLLECTION_TOP_FILTERS.FTX)} isSelected={filter === COLLECTION_TOP_FILTERS.FTX}>FTX</S.CollectionsTopFilter>
      <S.CollectionsTopFilter onClick={() => setFilter(COLLECTION_TOP_FILTERS.SOL)} isSelected={filter === COLLECTION_TOP_FILTERS.SOL}>Sol</S.CollectionsTopFilter>
      <S.CollectionsTopFilter onClick={() => setFilter(COLLECTION_TOP_FILTERS.ETH)} isSelected={filter === COLLECTION_TOP_FILTERS.ETH}>Eth</S.CollectionsTopFilter>
    </S.CollectionsTopFiltersWrapper>
  );

export default CollectionsTopFilters;
