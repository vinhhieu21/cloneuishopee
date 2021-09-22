import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
export default class itemData0D extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Image source={{ uri: "https://www.bigstockphoto.com/images/homepage/module-6.jpg" }}
                        style={{ width: height / 9, height: height / 8 }}
                    />
                    <Text style={styles.text}>Lấy ngay quà</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 3,
        backgroundColor: "#ffffff"
    },
    button: {
        margin: 3,
        alignItems: "center",
    },
    text: {
        width: width / 4,
        fontSize: 15,
        color: '#ff3300',
        textAlign: "center"
    }
})