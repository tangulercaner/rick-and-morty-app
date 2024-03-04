import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet} from 'react-native';
import Chips from '../Chips';
import colors from '../../core/colors';
import {ICharacter} from '../../types/networkTypes';
import FavoriteButton from '../FavoriteButton/FavoriteButton';

interface IProps {
  character: ICharacter;
  onPress: () => void;
  showFavoriteButton?: boolean;
}

const CharacterListItem = ({
  character,
  onPress,
  showFavoriteButton,
}: IProps) => {
  const {image, name, status, species} = character;

  return (
    <Container onPress={onPress}>
      <Image
        source={{
          uri: image,
        }}
      />
      <RightContentContainer>
        <NameContainer>
          <Name numberOfLines={1}>{name}</Name>
          {showFavoriteButton ? <FavoriteButton character={character} /> : null}
        </NameContainer>
        <Chips
          backgroundColor={colors.fog}
          textColor={colors.portage}
          text={species}
          containerStyle={styles.chipsContainer}
        />
        <Chips
          backgroundColor={colors.bizarre}
          textColor={colors.geraldine}
          text={status}
          containerStyle={styles.chipsContainer}
        />
      </RightContentContainer>
    </Container>
  );
};

export default React.memo(CharacterListItem);

const styles = StyleSheet.create({
  chipsContainer: {
    marginTop: 12,
  },
});

const Container = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${colors.wildSand};
  padding: 16px;
  border-radius: 8px;
`;

const RightContentContainer = styled.View`
  margin-left: 16px;
  flex: 1;
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
  width: 85px;
  height: 128px;
  border-radius: 12px;
`;
