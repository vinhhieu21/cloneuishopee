import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, StyleSheet, Dimensions, View } from 'react-native';

const { width, height } = Dimensions.get("window")
export default class itemListHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.clicked} 
                    onPress={() => this.props.getTypeFromList(this.props.index)}
                >
                    <Image source={{ uri: this.props.img }} style={{ width: 25, height: 25, marginTop: 5 }} />
                    <Text style={this.props.keyViewPager === this.props.index ? styles.texted : styles.untexted}>{this.props.text}</Text>
                </TouchableOpacity>
                <View style={this.props.keyViewPager === this.props.index ? styles.footer : null}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    clicked: {
        width: (width - 50) / 4,
        height: 50,
        borderWidth: 0.5,
        alignItems: "center"
    },
    texted: {
        fontSize: 12,
        color: "red"
    },
    untexted: {
        fontSize: 12,
    //    color: "red"
    },
    container: {
        width: (width - 50) / 4,
        height: 60,
        marginHorizontal: 5,
    },
    footer: {
        marginTop: 5,
        height: 4,
        backgroundColor: "red",
        width: (width - 120) / 4,
        alignSelf: "center"
    }
})