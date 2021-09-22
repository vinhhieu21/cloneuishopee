import React, { Component } from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

const {width, height} = Dimensions.get("window");
export default class itemComment extends Component {
    render() {
        return (
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginHorizontal: 10, marginVertical: 5 }}>
                <View style={{ flexDirection: "row" }}>
                    <Image source={{ uri: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg' }} style={{ width: 30, height: 30, borderRadius: 15 }} />
                    <Text style={{ fontWeight: "bold", marginLeft: 5, width: width*3/4 }}>{this.props.name} 
                        <Text style={{fontWeight: "normal"}} > {this.props.cmt}</Text>
                    </Text>
                </View>
                <FeatherIcon name="heart" size={15} />
            </View>
        )
    }
}