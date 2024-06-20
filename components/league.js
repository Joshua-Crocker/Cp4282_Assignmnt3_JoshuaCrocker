import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

export default function League({ leagues, imageList, leagueIndex }) {
  const currentLeague = leagues[leagueIndex];

  if (!currentLeague) {
    return <Text>No league data available</Text>;
  }

  return (
    <View style={styles.container}>
      <Text>League Name: {currentLeague.name}</Text>
      <Text>League Commissioner: {currentLeague.commissioner}</Text>
      <Text>League Championship Trophy: {currentLeague.championshipTrophy}</Text>
      <Text>Last Championship Winner: {currentLeague.lastWinner}</Text>
      <Text>Championship Team MVP: {currentLeague.teamMVP}</Text>
      <Text>Championship Team Origin Country: {currentLeague.teamCountry}</Text>
      <Text>Championship Team MVP Origin Country: {currentLeague.teamMVPCountry}</Text>
      <Image source={imageList[leagueIndex]} style={styles.image} />
      <Text>{currentLeague.yearEstablished}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
});
