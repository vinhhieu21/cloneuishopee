import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

export default class itemNapThe extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{alignItems: "center"}}>
                    <TouchableOpacity style={styles.button}>
                    </TouchableOpacity>
                    <Text style={styles.text}>{this.props.text}</Text>
                </View>
                <View style={{ marginLeft: 15, width: 1, backgroundColor: "#d6d6c2", height: 30 }}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginHorizontal: 15,
        marginTop: 15,
        flexDirection: "row"
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