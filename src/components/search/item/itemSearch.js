import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
export default class itemSearch extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Text style={styles.text}>{this.props.name}</Text>
                        <Image source={{ uri: "https://www.bigstockphoto.com/images/homepage/module-6.jpg" }}
                            style={{ width: 50, height: 50, marginRight: 10 }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderColor: "#a3a375",
        width: width / 2,
        height: 60
    },
    button: {
        margin: 3,
    },
    text: {
        width: width / 4,
        fontSize: 12,
        fontWeight: "800",
        marginLeft: 10
    }
})