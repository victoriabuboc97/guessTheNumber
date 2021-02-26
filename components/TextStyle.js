import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

function TextStyle(props) {
    return (
        <Text style={styles.textContainer}>{props.title}</Text>
    );
}

const styles=StyleSheet.create({
    textContainer: {
        color: Colors.primary,
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default TextStyle;