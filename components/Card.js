import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from "../constants/colors";

function Card(props) {
    return <View style={{...styles.card, ...props.style}}>{props.children}</View>
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 35,
        backgroundColor: Colors.secondary,
        marginVertical: 20,
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Card;