import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ButtonStyle from '../components/ButtonStyle';
import Card from '../components/Card';
import TextStyle from '../components/TextStyle';
import Colors from '../constants/colors';

function GameOverScreen(props) {
    return (
        <View style={styles.container}>
            <Card style={styles.cardContainer}>
                <TextStyle title='The Game is over!'/>
                <View style={styles.roundsContainer}>
                    <Text>Number of rounds: {props.roundsNumber}</Text>
                    <Text>Number was: {props.userNumber}</Text>
                </View>
                <ButtonStyle title="New Game" onPress={props.onRestart} color={Colors.secondary}/>
            </Card>
        </View>
    );
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.background,
    },
    cardContainer: {
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    roundsContainer: {
        margin: 20,
    }
});

export default GameOverScreen;