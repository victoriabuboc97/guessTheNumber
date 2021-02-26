import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import ButtonStyle from '../components/ButtonStyle';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import TextStyle from '../components/TextStyle';
import Colors from '../constants/colors';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

function GameScreen(props) {
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, props.userChoice)
    );
    const [rounds, setRounds] = useState(0);
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver])

    const nextGuesHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) || 
        (direction === 'greater' && currentGuess > props.userChoice)) {
            Alert.alert("Don't lie!", "You know it is wrong...", 
                [{text: "Sorry!", style: 'cancel'}]);
            return;
        }
        if(direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    };

    return (
        <View style={styles.container}>
            <Card style={styles.container}>
                <Text style={styles.plainText}>Opponent's Guess"</Text>
                <NumberContainer>{currentGuess}</NumberContainer>
                <Card style={styles.buttonContainer}>
                    <ButtonStyle color={Colors.secondary} title="Lower" onPress={nextGuesHandler.bind(this, 'lower')}/>
                    <ButtonStyle color={Colors.secondary} title="Greater" onPress={nextGuesHandler.bind(this, 'greater')}/>
            </Card>
            </Card>
        </View>
    );
}

const styles=StyleSheet.create({
    button: {
        borderRadius: 15,
        borderWidth: 1,
        borderColor: Colors.primary,
        backgroundColor: Colors.primary,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 5 },
        shadowRadius: 6,
        shadowOpacity: 0.86,
        alignItems: 'center',
        justifyContent: 'center',
        width: 120,
        height: 50,
    },
    plainText: {
        color: Colors.secondary,
        fontSize: 20,
        marginBottom: 50,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
        width: 350,
        maxWidth: '95%',
    },
    container: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.background,
    },
});

export default GameScreen;