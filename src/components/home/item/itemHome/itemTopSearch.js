import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
export default class itemDataTopSearch extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <View>
                        <Text style={styles.textName}>{this.props.name}</Text>
                        <Text style={styles.text}>{(this.props.selled - this.props.selled % 1000) / 1000}k + sản phẩm</Text>
                    </View>
                    <Image source={{ uri: "https://www.bigstockphoto.com/images/homepage/module-6.jpg" }}
                        style={{ width: height / 12, height: height / 10 }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        borderWidth: 1,
        borderColor: "#a3a375",
        width: width/2,
        height: height / 9
    },
    button: {
        margin: 3,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    text: {
        width: width / 4,
        fontSize: 12,
        //color: '#ff3300',
        textAlign: "left"
    },
    textName: {
        width: width / 4,
        fontSize: 13,
        fontWeight: "bold",
        //color: '#ff3300',
        textAlign: "left"
    }
})