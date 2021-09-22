import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
export default class itemDataSale extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={{ marginHorizontal: 10, flexDirection: "row" }}>
                    <View style={{ width: height / 8, height: height / 6, alignSelf: "center" }}>
                        <Image source={{ uri: "https://www.bigstockphoto.com/images/homepage/module-6.jpg" }}
                            style={{ width: height / 8, height: height / 6, alignSelf: "center" }}
                        />
                        <View style={styles.textsale}>
                            <Text style={{ color: '#ff1a1a', fontSize: 11 }}>{this.props.sale}%</Text>
                            <Text style={{ fontWeight: "bold", color: "#ffffff", fontSize: 11 }}>GIẢM</Text>
                        </View>
                    </View>
                    <View style={{ marginHorizontal: 10 }}>
                        <Text style={{ width: width / 1.4, marginBottom: 15 }}>{this.props.name}</Text>
                        <Text style={{ textDecorationLine: 'line-through' }}>
                            <Text style={{ textDecorationLine: 'underline' }}>đ</Text>{this.props.amount}
                        </Text>
                        <View style={{ flexDirection: "row" }}>
                            <View>
                                <View style={{ flexDirection: "row", alignItems: "center", }}>
                                    <Text style={{ textDecorationLine: 'underline', color: '#ff3300' }}>đ</Text>
                                    <Text style={styles.text}>{(this.props.amount * (100-this.props.sale))/100}</Text>
                                </View>
                                <View style={{ width: width / 2 }}>
                                    {/* <Slider
                                        disabled
                                        style={{ width: width / 2 }}
                                        maximumValue={this.props.count}
                                        minimumValue={0}
                                        minimumTrackTintColor="#307ecc"
                                        maximumTrackTintColor="#000000"
                                        value={this.props.selled * 100 / this.props.count}
                                    /> */}
                                    <View style={{ width: width / 2, height: 16, backgroundColor: "#ccccb3", borderRadius: 8 }}>
                                        <View style={{ width: this.props.selled * (width / 2) / this.props.count, height: 16, backgroundColor: "red", borderBottomLeftRadius: 8, borderTopLeftRadius: 8, borderRadius: this.props.selled === this.props.count ? 8 : null }}></View>
                                        <Text style={{
                                            textAlign: "center", color: "#ffffff",
                                            fontSize: 10, position: "absolute",
                                            alignSelf: "center", fontWeight: "bold"
                                        }}>
                                            Đã bán {this.props.selled}
                                        </Text>
                                    </View>
                                    {/* <Text style={{ textAlign: "center", width: width / 2 }}>Đã bán {this.props.selled}</Text> */}
                                </View>
                            </View>
                            <TouchableOpacity style={{ width: 80, height: 40, backgroundColor: "#ff3300", marginHorizontal: 10, alignItems: "center", justifyContent: "center" }}>
                                <Text style={{ color: "#ffffff" }}>Mua ngay</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        width: width,
       // marginHorizontal: 2,
        marginBottom: 2,
    },
    text: {
        fontSize: 17,
        color: '#ff3300',
    },
    textsale: {
        width: width / 12,
        height: width / 11,
        backgroundColor: '#e6e600',
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
    }
})