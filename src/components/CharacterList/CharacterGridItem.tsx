import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import {ICharacter} from '../../types/networkTypes';
import colors from '../../core/colors';
import Chips from '../Chips';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

interface IProps {
  character: ICharacter;
  onPress: () => void;
  showFavoriteButton?: boolean;
}

const CharacterGridItem = ({
  character,
  onPress,
  showFavoriteButton,
}: IProps) => {
  const {image, name, status, species} = character;

  return (
    <Container onPress={onPress}>
      <UpperContentContainer>
        <Image
          source={{
            uri: image,
          }}
        />
        <ChipsContainer>
          <Chips
            backgroundColor={colors.fog}
            textColor={colors.portage}
            text={species}
            containerStyle={styles.speciesChip}
          />
          <Chips
            backgroundColor={colors.bizarre}
            textColor={colors.geraldine}
            text={status}
          />
        </ChipsContainer>
      </UpperContentContainer>
      <NameContainer>
        <Name numberOfLines={1}>{name}</Name>
        {showFavoriteButton ? <FavoriteButton character={character} /> : null}
      </NameContainer>
    </Container>
  );
};

export default React.memo(CharacterGridItem);

const styles = StyleSheet.create({
  speciesChip: {
    marginBottom: 16,
  },
});

const Container = styled.TouchableOpacity`
  background-color: ${colors.wildSand};
  padding: 12px;
  border-radius: 8px;
`;

const UpperContentContainer = styled.View`
  flex-direction: row;
  margin-bottom: 16px;
`;

const ChipsContainer = styled.View`
  margin-left: 16px;
`;

const NameContainer = styled.View`
  flex-direction: row;
`;

const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  color: ${colors.black};
  flex: 1;
`;

const Image = styled.Image`
  width: 48px;
  height: 70px;
  border-radius: 12px;
`;
