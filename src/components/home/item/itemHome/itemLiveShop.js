import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
export default class itemLiveShop extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <Image source={{ uri: "https://www.bigstockphoto.com/images/homepage/module-6.jpg" }}
                        style={{ width: height / 7, height: height / 6 }}
                    />
                    <View style={{ height: height / 6, position: "absolute" }}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ marginHorizontal: 2, backgroundColor: "#ff3300", width: 30, height: 15 }}>
                                <Text style={styles.text}>LIVE</Text>
                            </View>
                            <View style={{ marginHorizontal: 2, backgroundColor: "#2e2e1f", width: 30, height: 15 }}>
                                <Text style={styles.text}>11</Text>
                            </View>
                        </View>
                        <View style={{ height: height / 7, justifyContent: 'flex-end'}}>
                            <Text style={styles.text}>{this.props.name}</Text>
                        </View>
                    </View>
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
    },
    text: {
        textAlign: "center",
        fontSize: 12,
        color: '#ffffff',
    }
})