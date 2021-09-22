import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
export default class itemDataTopSearch extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                    <View style={{ flexDirection: "row" }}>
                        <Image source={{ uri: "https://www.bigstockphoto.com/images/homepage/module-6.jpg" }}
                            style={{ width: height / 7, height: height / 7, marginHorizontal: 5 }}
                        />
                        <View>
                            <Image source={{ uri: "https://www.bigstockphoto.com/images/homepage/module-6.jpg" }}
                                style={{ width: height / 15, height: height / 15, marginVertical: 2 }}
                            />
                            <Image source={{ uri: "https://www.bigstockphoto.com/images/homepage/module-6.jpg" }}
                                style={{ width: height / 15, height: height / 15 }}
                            />
                        </View>
                    </View>
                    <View style={{ marginLeft: 7 }}>
                        <Text style={{ width: width / 4, fontSize: 13 }}>{this.props.name}</Text>
                        <Text style={styles.text}>Đã bán {(this.props.selled - this.props.selled % 1000) / 1000}k +</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 3,
        backgroundColor: "#f5f5f0"
    },
    button: {
        margin: 3,
        //alignItems: "center",
    },
    text: {
        width: width / 4,
        fontSize: 12,
        color: '#adad85',
        //textAlign: "right"
    }
})