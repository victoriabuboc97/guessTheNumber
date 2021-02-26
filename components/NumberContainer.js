import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from "../constants/colors";

function NumberContainer(props) {
    return (
        <View style={styles.contaier}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
}

const styles=StyleSheet.create({
    contaier: {
        borderWidth: 2,
        borderColor: Colors.secondary,
        borderRadius: 100,
        width: 50,
        height: 50,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    number: {
        color: Colors.secondary,
        fontSize: 22,
    },
});

export default NumberContainer;