import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Colors from "../constants/colors"

function Header(props) {
    return (
        <View style={styles.background}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>{props.title}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: Colors.background,
    },
    header: {
        height: 90,
        backgroundColor: Colors.primary,
        alignItems: "center",
        justifyContent:'center',
        borderRadius: 35,
        marginVertical: 20,
        marginHorizontal: 10,
    },
    headerTitle: {
        color: Colors.secondary,
        fontSize: 22,
        fontWeight: 'bold',
    },
});

export default Header;