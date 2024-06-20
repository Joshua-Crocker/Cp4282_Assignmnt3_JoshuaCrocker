import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import League from '../components/league';
import Button from '../components/button';
import { LeagueContext } from '../components/LeagueContext';

const nhlImage = require('../assets/NHL_Logo.jpg');
const nflImage = require('../assets/NFL_Logo.jpg');
const mlbImage = require('../assets/MLB_Logo.jpg');

export default function App() {
    const { league, setLeague } = useContext(LeagueContext);
    const [leagueIndex, setLeagueIndex] = React.useState(0);

    const handleLeaguePress = (index) => {
        setLeagueIndex(index);
    };

    const imageList = [nhlImage, mlbImage, nflImage];

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Top 3 Sport's Leagues</Text>
            <League leagues={league} imageList={imageList} leagueIndex={leagueIndex} />
            <View style={styles.buttonContainer}>
                {league.map((_, index) => (
                    <Button
                        key={index}
                        label="Press"
                        imageSource={[nhlImage, mlbImage, nflImage][index]}
                        onPress={() => handleLeaguePress(index)}
                        selected={leagueIndex === index}
                    />
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
    },
    text: {
        fontSize: 20,
        marginTop: 100,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: '100%',
    },
});
