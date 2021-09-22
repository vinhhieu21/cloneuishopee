import React, { Component } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default class itemTypeSale extends Component {
    render() {
        return (
            <TouchableOpacity style={{ marginHorizontal: 2, height: 75, width: 75,  alignItems: "center", backgroundColor: "#ffffff" }}
                onPress={() => { this.props.getTypeFromList(this.props.index) }}
            >
                <View style={{width: 40, height: 40, backgroundColor: "red"}}></View>
                <Text style={{fontSize: 11, textAlign: "center"}}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}