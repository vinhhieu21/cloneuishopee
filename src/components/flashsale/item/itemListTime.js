import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class itemListTime extends Component {
    render() {
        return (
            <TouchableOpacity style={this.props.keyViewPager === this.props.index ? styles.buttonSelected : styles.buttonUnSelected}
                onPress={() => { this.props.getTimeFromList(this.props.index) }}
            >
                <Text style={this.props.keyViewPager === this.props.index ? styles.textSelected : null}>{this.props.time}</Text>
                <Text style={this.props.keyViewPager === this.props.index ? styles.textSelected : null}>Sắp diễn ra</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonSelected: {
        marginHorizontal: 20,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderBottomWidth: 4,
        borderBottomColor: "red"
    },
    buttonUnSelected : {
        marginHorizontal: 20,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    textSelected: {
        color: "#ff3300"
    }
})