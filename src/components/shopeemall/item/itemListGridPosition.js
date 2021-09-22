import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

const {width, height} = Dimensions.get("window")
export default class ItemListGridPosition extends Component{
    render(){
        return(
            <TouchableOpacity style={this.props.keyViewPager === this.props.index ? styles.selected : styles.unselected}
                onPress={() => {this.props.getTypeFromList(this.props.index)}}
            >
                <View style= {{width: width/12, height: width /12, backgroundColor: "red"}}></View>
                <Text style={this.props.keyViewPager === this.props.index ? styles.textSelected : styles.textunSelected}>{this.props.name}</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    textSelected: {
       // color: "#ff3300",
        fontWeight: "800",
        width: width/4,
        textAlign: "center",
        fontSize: 12,
        marginTop: 5,
        color: "red"
    },
    textunSelected: {
        // color: "#ff3300",
         fontWeight: "800",
         width: width/4,
         textAlign: "center",
         fontSize: 12,
         marginTop: 5
     },
    selected: {
        height: width/5, 
        width: width/4, 
        marginTop: 10,
        //justifyContent: "center",
        // borderBottomWidth: 4,
        // borderBottomColor: "red",
        alignItems: "center",
    },
    unselected: {
        height: width/5,
        width: width/4,  
        marginTop: 10,
        alignItems: "center"
    }
})