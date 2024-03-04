import React from 'react';
import styled from 'styled-components/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import colors from '../../core/colors';
import {RootStackParamList} from '../../navigation/navigationTypes';
import {useNavigation} from '@react-navigation/native';
import {ICharacter} from '../../types/networkTypes';
import {useSelector} from 'react-redux';
import {IReduxState} from '../../types/reduxTypes';
import {getEpisode} from '../../network/network';
import CharacterList from '../../components/CharacterList/CharacterList';
import {t} from 'i18next';

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'FAVORITES'
>;

const Favorites = () => {
  const navigation = useNavigation<NavigationProp>();

  const favoriteCharacters = useSelector(
    (state: IReduxState) => state.main.favoriteCharacters,
  );

  const onPressCharacterItem = async (character: ICharacter) => {
    const {episode} = character;
    const lastEpisode = episode[episode.length - 1];

    const episodeResponse = await getEpisode(lastEpisode);

    navigation.navigate('DETAILS', {
      character,
      episode: episodeResponse,
    });
  };

  return (
    <Container>
      {favoriteCharacters ? (
        <CharacterList
          title={t('favorite_characters_list')}
          characters={favoriteCharacters}
          onPressCharacterItem={onPressCharacterItem}
        />
      ) : null}
    </Container>
  );
};

export default Favorites;

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.white};
`;
