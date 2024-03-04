import React, {RefObject, useCallback} from 'react';
import styled from 'styled-components/native';
import {FlatList, StyleSheet} from 'react-native';
import CharacterListItem from './CharacterListItem';
import useCharacterListHook from './useCharacterListHook';
import CharacterGridItem from './CharacterGridItem';
import {ICharacter, ICharacterList} from '../../types/networkTypes';
import {ICharacterFilter} from '../../types/componentTypes';
import FilterButton from '../FilterButton';
import GridModeButton from '../GridModeButton';
import LoadingSpinner from '../LoadingSpinner';
import colors from '../../core/colors';
import CharacterFilter from '../CharacterFilter/CharacterFilter';
import CharacterListEmpty from './CharacterListEmpty';

interface IProps {
  title: string;
  characters: ICharacterList;
  onPressCharacterItem: (character: ICharacter) => void;
  getCharactersIsLoading?: boolean;
  showFavoriteButton?: boolean;
  showFilterButton?: boolean;
  applyFilter?: (newFilter: ICharacterFilter) => void;
  clearFilter?: () => void;
  loadMoreCharacter?: () => void;
  flatListRef?: RefObject<FlatList<ICharacter>>;
  filter?: ICharacterFilter | null;
}

const CharacterList = ({
  title,
  characters,
  onPressCharacterItem,
  getCharactersIsLoading,
  showFavoriteButton,
  showFilterButton,
  clearFilter,
  applyFilter,
  loadMoreCharacter,
  flatListRef,
  filter,
}: IProps) => {
  const {
    keyExtractor,
    showFilter,
    toggleFilter,
    gridMode,
    toggleGrid,
    isCharacterListEmpty,
  } = useCharacterListHook(characters, clearFilter, filter);

  const renderListItem = useCallback(
    ({item}: {item: ICharacter}) => {
      const onPress = () => onPressCharacterItem(item);

      return (
        <CharacterListItem
          character={item}
          onPress={onPress}
          showFavoriteButton={showFavoriteButton}
        />
      );
    },
    [onPressCharacterItem, showFavoriteButton],
  );

  const renderGridItem = useCallback(
    ({item}: {item: ICharacter}) => {
      const onPress = () => onPressCharacterItem(item);

      return (
        <CharacterGridItem
          character={item}
          onPress={onPress}
          showFavoriteButton={showFavoriteButton}
        />
      );
    },
    [onPressCharacterItem, showFavoriteButton],
  );

  return (
    <Container>
      <TitleContainer>
        <Title>{title}</Title>

        {showFilterButton ? (
          <FilterButton
            onPress={toggleFilter}
            containerStyle={styles.filterButton}
          />
        ) : null}
        <GridModeButton onPress={toggleGrid} />
      </TitleContainer>
      {showFilter && applyFilter && clearFilter ? (
        <CharacterFilter applyFilter={applyFilter} clearFilter={clearFilter} />
      ) : null}
      <FlatList
        showsVerticalScrollIndicator={false}
        ref={flatListRef}
        data={characters}
        renderItem={gridMode ? renderGridItem : renderListItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={ItemSeperator}
        onEndReached={loadMoreCharacter ?? null}
        onEndReachedThreshold={0.5}
        ListFooterComponent={
          <LoadingSpinner isLoading={!!getCharactersIsLoading} />
        }
        numColumns={gridMode ? 2 : 1}
        key={gridMode ? 1 : 0}
        columnWrapperStyle={gridMode ? styles.columnWrapperStyle : null}
        ListEmptyComponent={
          getCharactersIsLoading ? null : <CharacterListEmpty />
        }
        contentContainerStyle={
          isCharacterListEmpty ? styles.emptyContentContainerStyle : null
        }
      />
    </Container>
  );
};

export default CharacterList;

const styles = StyleSheet.create({
  filterButton: {
    marginRight: 16,
  },
  columnWrapperStyle: {justifyContent: 'space-between', flex: 1},
  emptyContentContainerStyle: {flex: 1},
});

const Container = styled.View`
  flex: 1;
  padding: 16px;
`;

const ItemSeperator = styled.View`
  height: 16px;
  width: 16px;
`;

const TitleContainer = styled.View`
  flex-direction: row;
`;

const Title = styled.Text`
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  text-align: left;
  color: ${colors.jaguar};
  margin-bottom: 16px;
  flex: 1;
`;
