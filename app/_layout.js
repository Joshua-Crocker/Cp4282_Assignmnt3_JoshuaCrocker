import { Slot } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import NavBar from '../components/navbar';
import { useState } from 'react';
import leagueData from '../assets/sports.json';
import { LeagueContext } from '../components/LeagueContext';

export default function HomeLayout() {
    const [league, setLeague] = useState(leagueData.sportsLeagues);

    return (
        <View style={styles.container}>
            <NavBar />
            <LeagueContext.Provider value={{ league, setLeague }}>
                <Slot />
            </LeagueContext.Provider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'top',
        alignItems: 'center',
        padding: 20,
    },
});
