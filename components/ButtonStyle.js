import React from 'react';
import { Button, View, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

function ButtonStyle(props) {
    return (
        <View style={styles.confirmButton}>
            <Button title={props.title} 
                onPress={props.onPress} 
                color={props.color}/>
        </View>
    );
}

const styles=StyleSheet.create({
    confirmButton: {
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
});

export default ButtonStyle;