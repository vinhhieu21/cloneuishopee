import React, { Component } from 'react';
import { View, Image, Dimensions, Text, StyleSheet, TouchableOpacity } from 'react-native';

const{width, height} = Dimensions.get("window");
export default class ItemListTypeDanhMuc extends Component {
    render(){
        return(
            <TouchableOpacity style={this.props.id ===  this.props.keyViewPager ? styles.clicked : styles.unclicked}
                onPress={() => this.props.getTypeFromList(this.props.id)}
            >
                <Image source={{uri: this.props.img}} style={{width: 20, height: 20}} />
                <Text style={this.props.id ===  this.props.keyViewPager ? styles.text : styles.untext}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    unclicked: {
        backgroundColor: "#adad85",
        width: width/5, 
        height: 55,
        //justifyContent: "center",
        alignItems: "center"
    },
    clicked: {
        backgroundColor: "#ffffff",
        width: width/5, 
        height: 55,
        justifyContent: "center",
        alignItems: "center"
    },
    untext: {
        fontSize: 11,
        textAlign: "center",
        marginVertical: 5
    },
    text: {
        fontSize: 11,
        textAlign: "center",
        marginVertical: 5,
        color: "#ff751a"
    }
})