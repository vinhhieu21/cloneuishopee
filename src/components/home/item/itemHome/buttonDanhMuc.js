import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Dimensions } from 'react-native';

const {width, height} = Dimensions.get("window")

export default class ButtonSuggest extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                </TouchableOpacity>
                <Text style={styles.text}>{this.props.name}</Text>
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
        width: width/5,
        height: width/5,
        borderRadius: width/10,
        backgroundColor: "#e0e0d1",
    },
    text: {
        width: 80,
        fontSize: 13,
        textAlign: "center"
    }
})