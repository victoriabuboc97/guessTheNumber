import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from '../components/NumberContainer';
import ButtonStyle from '../components/ButtonStyle';
import TextStyle from '../components/TextStyle';

function StartGameScreen(props) {
    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText);
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("Invalid number", "Number has to be between 1 and 99.", 
            [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput;
    if(confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text style={styles.plainText}>Chosen Number:</Text>
                <View style={styles.choosenContainer}>
                    <NumberContainer>{selectedNumber}</NumberContainer>
                    <View style={styles.confirmButton}>
                        <ButtonStyle title="Start Game" color={Colors.secondary} onPress={() => props.onStartGame(selectedNumber)}/>
                    </View>
                </View>
            </Card>
        );
    }

    return (
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();}}>
            <View style={styles.container}>
                <Text style={styles.title} >Start a new game</Text>
                <Card style={styles.inputContainer}>
                    <TextStyle title='Select a number'/>
                    <Input 
                        style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        keyboardType="number-pad" 
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="Reset" 
                                onPress={resetInputHandler} 
                                color={Colors.primary}/>
                        </View>
                        <ButtonStyle title="Confirm" 
                                onPress={confirmInputHandler} 
                                color={Colors.secondary}/>
                    </View>
                </Card>
                {confirmedOutput}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    plainText: {
        color: Colors.secondary,
        fontSize: 18,
        marginBottom: 10,
    },
    plainTextPrimary: {
        color: Colors.primary,
        fontSize: 22,
        fontWeight: 'bold',
    },
    input: {
        width: 50,
        textAlign: 'center',
    },
    button: {
        width: 100,
        height: 50,
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent:'flex-start',
    },
    inputContainer: {
        width: 350,
        maxWidth: '95%',
        alignItems: 'center',
    },
    buttonContainer: {
        marginTop: 10,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    choosenContainer: {
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 22,
        marginVertical: 10,
        color: Colors.backgroundColor,
    },
    summaryContainer: {
        marginVertical: 20,
        marginHorizontal: 10,
        width: 350,
        maxWidth: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.primary,
    }
});

export default StartGameScreen;