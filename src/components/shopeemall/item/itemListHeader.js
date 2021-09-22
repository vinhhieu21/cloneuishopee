import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default class ItemListHeader extends Component {
    render() {
        return (
            <View style={this.props.keyViewPager === this.props.index ? styles.selected : styles.unselected}>
                <TouchableOpacity
                    onPress={() => { this.props.getTypeFromList(this.props.index) }}
                >
                    <Text style={this.props.keyViewPager === this.props.index ? styles.textSelected : null}>{this.props.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    textSelected: {
        color: "#ff0000",
        fontWeight: "bold"
    },
    selected: {
        height: 50,
        marginHorizontal: 5,
        justifyContent: "center",
        borderBottomWidth: 4,
        borderBottomColor: "#ff0000",
        alignItems: "center"
    },
    unselected: {
        height: 50,
        marginHorizontal: 5,
        justifyContent: "center",
        alignItems: "center"
    }
})