import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class buttonViewPager extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    
                </TouchableOpacity>
                <Text style={{ fontWeight: "900", fontSize: 11 }}>{this.props.text}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        alignItems: "center"
    },
    button: {
        width: 60,
        height: 60,
        backgroundColor: "#ffffff",
        borderRadius: 30,
        borderWidth: 2,
        marginHorizontal: 15,
        marginVertical: 5,
        borderColor: "#ff751a"
    }
})