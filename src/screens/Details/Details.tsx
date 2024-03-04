import {RouteProp, useRoute} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {RootStackParamList} from '../../navigation/navigationTypes';
import styled from 'styled-components/native';
import colors from '../../core/colors';
import Chips from '../../components/Chips';
import {t} from 'i18next';
import Table from '../../components/Table/Table';
import BackButton from '../../components/BackButton';

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'DETAILS'>;

const Details = () => {
  const route = useRoute<ProfileScreenRouteProp>();
  const {character, episode} = route.params;

  const getContentTable = useCallback(() => {
    const content = [
      {
        title: t('num_of_episodes'),
        value: character.episode.length.toString(),
      },
      {
        title: t('gender'),
        value: character.gender,
      },
      {
        title: t('origin_location_name'),
        value: character.origin.name,
      },
      {
        title: t('last_known_location_name'),
        value: character.location.name,
      },
    ];

    if (episode) {
      content.push({
        title: t('last_seen_episode_name'),
        value: episode.name,
      });

      content.push({
        title: t('last_seen_air_date'),
        value: episode.air_date,
      });
    }

    return content;
  }, [
    character.episode.length,
    character.gender,
    character.location.name,
    character.origin.name,
    episode,
  ]);

  return (
    <Container>
      <Image source={{uri: character.image}} />

      <SafeAreaView>
        <BackContainer>
          <BackButton />
        </BackContainer>
        <ContentContainer
          contentContainerStyle={styles.contentContainerStyle}
          bounces={false}>
          <Name numberOfLines={1}>{character.name}</Name>
          <Row>
            <Chips
              backgroundColor={colors.fog}
              textColor={colors.portage}
              text={character.species}
              containerStyle={styles.leftChipContainer}
            />
            <Chips
              backgroundColor={colors.bizarre}
              textColor={colors.geraldine}
              text={character.status}
            />
          </Row>
          <Table content={getContentTable()} />
        </ContentContainer>
      </SafeAreaView>
    </Container>
  );
};

export default Details;

const styles = StyleSheet.create({
  contentContainerStyle: {
    backgroundColor: colors.wildSand,
    height: '100%',
    padding: 24,
  },
  leftChipContainer: {
    marginRight: 24,
  },
});

const Container = styled.View`
  flex: 1;
`;

const BackContainer = styled.View`
  padding-vertical: 18px;
  padding-left: 24px;
`;

const Image = styled.Image`
  width: 100%;
  height: 300px;
  position: absolute;
`;

const ContentContainer = styled.ScrollView`
  margin-top: 136px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  line-height: 25px;
  text-align: left;
  color: ${colors.black};
`;

const Row = styled.View`
  flex-direction: row;
  margin-top: 24px;
`;
