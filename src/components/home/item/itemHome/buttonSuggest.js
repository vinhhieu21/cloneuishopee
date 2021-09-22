import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

export default class ButtonSuggest extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                </TouchableOpacity>
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        marginHorizontal: 15,
        marginTop: 15,
    },
    button: {
        width: 40,
        height: 40,
        borderRadius: 5,
        backgroundColor: "red",
    },
    text: {
        width: 80,
        fontSize: 10,
        textAlign: "center"
    }
})