import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Image, Dimensions, Slider } from 'react-native'

const { width, height } = Dimensions.get('window')
export default class itemDataFlashSale extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <TouchableOpacity style={styles.button}>
                        <Image source={{ uri: "https://www.bigstockphoto.com/images/homepage/module-6.jpg" }}
                            style={{ width: height / 8, height: height / 6 }}
                        />
                        <View style={{ flexDirection: "row", alignItems: "center", }}>
                            <Text style={{ textDecorationLine: 'underline' }}>đ</Text>
                            <Text style={styles.text}>{(this.props.amount*(100-this.props.sale))/100}</Text>
                        </View>
                    </TouchableOpacity>
                    {/* <Slider
                        disabled
                        style={{ width: width / 4 }}
                        maximumValue={this.props.count}
                        minimumValue={0}
                        minimumTrackTintColor="#307ecc"
                        maximumTrackTintColor="#000000"
                        value={this.props.selled * 100 / this.props.count}
                    /> */}
                    <View style={{ width: width / 4, height: 16, backgroundColor: "#ccccb3", borderRadius: 8 }}>
                        <View style={{ width: this.props.selled * (width / 4) / this.props.count, height: 16, backgroundColor: "red", borderBottomLeftRadius: 8, borderTopLeftRadius: 8, borderRadius: this.props.selled === this.props.count ? 8 : null }}></View>
                        <Text style={{
                            textAlign: "center", color: "#ffffff",
                            fontSize: 11, position: "absolute",
                            alignSelf: "center", fontWeight: "bold"
                        }}>
                            Đã bán {this.props.selled}
                        </Text>
                    </View>
                </View>
                <View style={styles.textsale}>
                    <Text style={{ color: '#ff1a1a', fontSize: 10 }}>{this.props.sale}%</Text>
                    <Text style={{ fontWeight: "bold", color: "#ffffff", fontSize: 10 }}>GIẢM</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        width: width / 4,
        marginHorizontal: 2,
        flexDirection: "row",
        justifyContent: "flex-end",
        marginBottom: 5
    },
    button: {
        alignItems: "center",
        textAlign: "center"
    },
    text: {
        fontSize: 15,
        color: '#ff3300',
    },
    textsale: {
        width: width / 12,
        height: width / 11,
        backgroundColor: '#e6e600',
        position: "absolute",
        justifyContent: "center",
        alignItems: "center"
    }
})