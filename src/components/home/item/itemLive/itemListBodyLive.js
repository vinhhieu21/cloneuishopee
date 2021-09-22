import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions, Text } from 'react-native';

const { width, height } = Dimensions.get("window")
export default class itemListLive extends Component {
    render() {
        return (
            <View style={{ width: (width - 30) / 2, height: 220, margin: 5 }}>
                <Image source={{ uri: this.props.img }} style={{ width: (width - 30) / 2, height: 220 }} />
                <View style={{ width: (width - 30) / 2, height: 220, position: "absolute", justifyContent: "space-between" }}>
                    <View style={{ flexDirection: "row" }}>
                        <View style={{ backgroundColor: this.props.living ?"#ff6600" : "#3366ff", width: 45, alignItems: "center", justifyContent: "center", marginTop: 10, marginLeft: 10 }}>
                            {this.props.living ? 
                            <Text style={{ fontWeight: "bold", color: "#ffffff", fontSize: 11 }}>Live</Text> : 
                            <Text style={{ fontWeight: "bold", color: "#ffffff", fontSize: 11 }}>XEM LẠI</Text> }
                        </View>
                        <View style={{ backgroundColor: "#2e2e1f", width: 35, alignItems: "center", marginTop: 10, justifyContent: "center" }}>
                            <Text style={{ fontWeight: "900", color: "#ffffff", fontSize: 11 }}>{this.props.view}</Text>
                        </View>
                    </View>
                    <View style={{ margin: 10 }}>
                        <Text style={{ color: "#ffffff" }}>{this.props.text}</Text>
                        <View style={{flexDirection: "row"}}>
                            <Image source={{uri: this.props.img}} style={{width: 30, height: 30, borderRadius: 15, marginRight: 5}} />
                            <Text style={{ color: "#ffffff" }}>{this.props.nameShop}</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
