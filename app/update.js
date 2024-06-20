import { Text, View, TextInput, StyleSheet, ScrollView } from 'react-native';
import { useContext, useState, useEffect } from 'react';
import { Picker } from '@react-native-picker/picker';
import Button from '../components/button';
import { LeagueContext } from '../components/LeagueContext';
import sportsLeaguesData from '../assets/sports.json';

export default function Page() {
    const { league, setLeague } = useContext(LeagueContext);
    const [sportsLeagues, setSportsLeagues] = useState([]);
    const [selectedLeague, setSelectedLeague] = useState(null);
    const [name, setName] = useState('');
    const [yearEstablished, setYear] = useState('');
    const [commissioner, setCommissioner] = useState('');
    const [championshipTrophy, setCTrophy] = useState('');
    const [lastWinner, setLastWinner] = useState('');
    const [teamMVP, setTeamMVP] = useState('');
    const [teamCountry, setTeamCountry] = useState('');
    const [teamMVPCountry, setTeamMVPCountry] = useState('');

    useEffect(() => {
        const leagues = sportsLeaguesData.sportsLeagues;
        setSportsLeagues(leagues);
        if (league) {
            setSelectedLeague(league);
            setName(league.name);
            setYear(String(league.yearEstablished));
            setCommissioner(league.commissioner);
            setCTrophy(league.championshipTrophy);
            setLastWinner(league.lastWinner);
            setTeamMVP(league.teamMVP);
            setTeamCountry(league.teamCountry);
            setTeamMVPCountry(league.teamMVPCountry);
        }
    }, [league]);

    const handleLeagueChange = (itemValue) => {
        const selected = sportsLeagues.find(l => l.name === itemValue);
        setSelectedLeague(selected);
        setName(selected.name);
        setYear(String(selected.yearEstablished));
        setCommissioner(selected.commissioner);
        setCTrophy(selected.championshipTrophy);
        setLastWinner(selected.lastWinner);
        setTeamMVP(selected.teamMVP);
        setTeamCountry(selected.teamCountry);
        setTeamMVPCountry(selected.teamMVPCountry);
    };

    const updateLeagueInfo = () => {
        const updatedLeague = {
            ...selectedLeague,
            name,
            yearEstablished: parseInt(yearEstablished),
            commissioner,
            championshipTrophy,
            lastWinner,
            teamMVP,
            teamCountry,
            teamMVPCountry,
        };
        setLeague((prevLeagues) => prevLeagues.map(l => l.name === selectedLeague.name ? updatedLeague : l));
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Text>Select a League</Text>
                {sportsLeagues.length > 0 && (
                    <Picker
                        selectedValue={selectedLeague?.name}
                        onValueChange={handleLeagueChange}
                        style={styles.picker}
                    >
                        {sportsLeagues.map((league) => (
                            <Picker.Item key={league.name} label={league.name} value={league.name} />
                        ))}
                    </Picker>
                )}
                <Text>League Name</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setName}
                    value={name}
                />
                <Text>Year Established</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    onChangeText={setYear}
                    value={yearEstablished}
                />
                <Text>League Commissioner</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setCommissioner}
                    value={commissioner}
                />
                <Text>Championship Trophy</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setCTrophy}
                    value={championshipTrophy}
                />
                <Text>Last Winner</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setLastWinner}
                    value={lastWinner}
                />
                <Text>Team MVP</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setTeamMVP}
                    value={teamMVP}
                />
                <Text>Team Country</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setTeamCountry}
                    value={teamCountry}
                />
                <Text>Team MVP Country</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setTeamMVPCountry}
                    value={teamMVPCountry}
                />
                <Button
                    label={"Update"}
                    onPress={updateLeagueInfo}
                />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    input: {
        height: 40,
        width: '100%',
        marginVertical: 12,
        borderWidth: 1,
        padding: 10,
    },
    picker: {
        height: 50,
        width: '100%',
        marginVertical: 12,
    },
});
