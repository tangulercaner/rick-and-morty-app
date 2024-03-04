import React from 'react';
import styled from 'styled-components/native';
import colors from '../../core/colors';
import CharacterList from '../../components/CharacterList/CharacterList';
import {t} from 'i18next';
import useHomeHook from './useHomeHook';

const Home = () => {
  const {
    applyFilter,
    characters,
    clearFilter,
    filter,
    flatListRef,
    getCharactersIsLoading,
    loadMoreCharacter,
    onPressCharacterItem,
  } = useHomeHook();

  return (
    <Container>
      {characters ? (
        <CharacterList
          title={t('character_list')}
          characters={characters}
          onPressCharacterItem={onPressCharacterItem}
          getCharactersIsLoading={getCharactersIsLoading}
          showFavoriteButton
          showFilterButton
          applyFilter={applyFilter}
          clearFilter={clearFilter}
          loadMoreCharacter={loadMoreCharacter}
          flatListRef={flatListRef}
          filter={filter}
        />
      ) : null}
    </Container>
  );
};

export default Home;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;
