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
                    <View  style={{ width: height / 7, height: 40, borderRadius: 15, borderColor: "#a3a375", borderWidth: 2, justifyContent: "center", alignItems: "center"  }}>
                        <Image source={{ uri: "https://www.bigstockphoto.com/images/homepage/module-6.jpg" }}
                            style={{ width: 30, height: 30 }}
                        />
                    </View>
                    <View>
                        <Text style={styles.text}>{this.props.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 3,
        backgroundColor: "#ffffff",
        borderColor: "#a3a375",
        borderWidth: 1
    },
    button: {
        margin: 3,
    },
    text: {
        textAlign: "center",
        fontSize: 12,
        color: '#ff3300',
    }
})