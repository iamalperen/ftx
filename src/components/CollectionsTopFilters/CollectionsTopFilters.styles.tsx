import styled from 'styled-components';

const CollectionsTopFiltersWrapper = styled.div`
margin-bottom: 30px;
`;

interface CollectionsTopFilterProps {
  readonly isSelected: boolean;
}

const CollectionsTopFilter = styled.button<CollectionsTopFilterProps>`
  cursor: pointer;
  border: 0;
  color: inherit;
  padding: 10px 20px;
  margin-right: 20px;
  font-size: 18px;
  background-color: ${(props) => (props.isSelected ? '#008aff' : 'transparent')};
  border-radius: 8px;
`;

export {
  CollectionsTopFiltersWrapper,
  CollectionsTopFilter,
};