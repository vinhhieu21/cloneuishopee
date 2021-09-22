import React, { Component } from 'react';
import { View, Image, Dimensions, Text, StyleSheet, TouchableOpacity } from 'react-native';

const{width, height} = Dimensions.get("window");
export default class ItemListTypeDanhMuc extends Component {
    render(){
        return(
            <TouchableOpacity style={styles.container}>
                <Image source={{uri: this.props.img}} style={{width: 40, height: 40}} />
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    //    backgroundColor: "#999966",
        width: width/5, 
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
    text: {
        fontSize: 11,
        textAlign: "center",
        marginVertical: 5
    }
})