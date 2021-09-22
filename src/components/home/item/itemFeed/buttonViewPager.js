import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';

export default class buttonViewPager extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}
                     onPress={() => { this.props.getTypeFromList(this.props.index)}}
                >
                    <Image source={{uri: this.props.icon}} style={{width: this.props.width, height: this.props.height}}  />
                    <Text style={{ fontWeight: "900" },this.props.index === this.props.keyViewPager ? {color: "red"} : null }>
                        {this.props.text}
                    </Text>
                </TouchableOpacity>
                <View style={this.props.index === this.props.keyViewPager ? styles.clicked : styles.unclicked}></View>
                <View style={{height: 5, backgroundColor: "#ffffff"}}></View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff"
    },
    button: {
        width: 80,
        height: 45,
        backgroundColor: "#ffffff",
        borderRadius: 5,
        borderWidth: 0.5,
        marginHorizontal: 5,
        justifyContent: "flex-end",
        alignItems: "center",
        marginVertical: 5
    },
    clicked: {
        width: 60, 
        height: 4, 
        backgroundColor: "red", 
        alignSelf: "center"
    },
    unclicked: {
        width: 60, 
        height: 4, 
        alignSelf: "center"
    }
})