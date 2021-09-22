import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions, Text, TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get("window")
export default class itemListEvent extends Component {
    render() {
        return (
            <View style={{ width: width-20, height: 100, flexDirection: "row", margin: 10, backgroundColor: "#ffffff" }}>
                <View>
                    <Image source={{ uri: this.props.img }} style={{width: 100, height: 100}} />
                </View>
                <View style={{marginHorizontal: 5, justifyContent: "space-around"}}>
                    <Text style={{fontWeight: "bold", fontSize: 13, marginTop: 5}}>{this.props.title}</Text>
                    <View style={{flexDirection: "row", alignItems: "center"}}>
                        <Image source={{uri: this.props.avatar}} style={{marginRight: 5, width: 26, height: 26, borderRadius: 13}}/>
                        <Text>{this.props.name}</Text>
                    </View>
                    {this.props.sieuhoi ? 
                    <View style={{height: 14, backgroundColor: "#ffcc00", width: 120}}>
                        <Text style={{color: "#ffffff", fontSize: 11, fontWeight: "bold", textAlign: "center", alignSelf: "center"}}>Siêu hội Shopee Live</Text>
                    </View> : null}
                    <View style={{flexDirection: "row", justifyContent: "space-between", width: width-140, marginBottom: 10}}>
                        <View>
                            <Text style={{fontSize: 11, color: "#ff6600"}}>{this.props.time}</Text>
                            <Text style={{fontSize: 11}}>{this.props.count} Thiết lập nhắc nhở</Text>
                        </View>
                        <TouchableOpacity style={{width: 60, borderRadius: 30, backgroundColor: "#ff6600", alignItems: "center", justifyContent: "center"}}>
                            <Text style={{fontSize: 12, color: "#ffffff", fontWeight: "bold"}}>Nhắc tôi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
