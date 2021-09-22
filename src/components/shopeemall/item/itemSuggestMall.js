import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Image, Dimensions } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const { width, height } = Dimensions.get('window')
export default class itemSuggestMall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selled: ""
        }
    }
    componentDidMount() {
        if (this.props.selled > 100000) {
            this.setState({ selled: (this.props.selled - this.props.selled % 100000) / 100000 + "tr+" })
        } else if (this.props.selled > 1000) {
            this.setState({ selled: (this.props.selled - this.props.selled % 100) / 1000 + "k" })
        } else {
            this.setState({ selled: this.props.selled })
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity>
                    <Image source={{ uri: "https://www.bigstockphoto.com/images/homepage/module-6.jpg" }}
                        style={{ width: width / 2 - 10, height: 180 }}
                    />
                    <View>
                        <Text style={{ marginLeft: 5 }}>{this.props.name.length > 50 ? this.props.name.substr(0, 50) + "..." : this.props.name}</Text>
                        <View style={{ marginHorizontal: 5 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                {this.props.sale > 0 ?
                                    <View style={{ marginHorizontal: 2, flexDirection: "row", alignItems: "flex-end" }}>
                                        <Text style={{ textDecorationLine: "line-through", fontSize: 12 }}>
                                            <Text style={{ textDecorationLine: 'underline', fontSize: 12, marginTop: 2 }}>
                                                đ
                                            </Text>
                                            {this.props.amount}
                                        </Text>
                                        <Text style={styles.text}>
                                            <Text style={{ textDecorationLine: 'underline', color: '#ff3300', fontSize: 12, marginTop: 2 }}>
                                                đ
                                            </Text>
                                            {(this.props.amount * (100 - this.props.sale) - this.props.amount * (100 - this.props.sale) % 1000) / 1000}.
                                            {this.props.amount * (100 - this.props.sale) % 1000}
                                        </Text>
                                    </View> :
                                    <View style={{ marginHorizontal: 2, flexDirection: "row" }}>
                                        <Text style={{ textDecorationLine: 'underline', color: '#ff3300', fontSize: 12, marginTop: 2 }}>đ</Text>
                                        <Text style={styles.text}>{this.props.amount}</Text>
                                    </View>}
                                {this.props.freeship ?
                                    <MaterialCommunityIcons name="truck-fast" size={20} color="#6699ff" /> : null}
                            </View>
                            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                <MaterialCommunityIcons name="heart-outline" size={15} />
                                <View style={{ flexDirection: "row" }}>
                                    <MaterialCommunityIcons name="star" size={15} color="#ffff1a" />
                                    <MaterialCommunityIcons name="star" size={15} color="#ffff1a" />
                                    <MaterialCommunityIcons name="star" size={15} color="#ffff1a" />
                                    <MaterialCommunityIcons name="star" size={15} color="#ffff1a" />
                                    <MaterialCommunityIcons name="star" size={15} color="#ffff1a" />
                                    <View style={{ marginHorizontal: 2 }}>
                                        <Text style={{ fontSize: 11 }}>
                                            Đã bán {this.state.selled}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{flexDirection: "row", alignItems: "center", justifyContent: "flex-end", marginRight: 5, marginTop: 5}}>
                                <EvilIcons name="location" size={15} />
                                <Text style={{fontSize: 11}}>{this.props.location}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        width: width / 2 - 10, height: 240, position: "absolute", flexDirection: "row",
                        justifyContent: this.props.mall ? "space-between" : "flex-end"
                    }}>
                        {this.props.mall ?
                            <View style={styles.textmall}>
                                <Text style={{ color: '#ffffff', fontSize: 11, fontWeight: "bold" }}>Mall</Text>
                            </View> : null}
                        <View style={styles.textsale}>
                            <Text style={{ color: '#ff1a1a', fontSize: 11 }}>{this.props.sale}%</Text>
                            <Text style={{ fontWeight: "bold", color: "#ffffff", fontSize: 11 }}>GIẢM</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 3,
        backgroundColor: "#ffffff",
        width: width / 2 - 10,
        height: 280,
        marginTop: 5,
        marginHorizontal: 5,
    },
    text: {
        textAlign: "center",
        fontSize: 15,
        color: '#ff3300',
        fontWeight: "900",
        marginHorizontal: 5
    },
    textsale: {
        width: width / 12,
        height: width / 11,
        backgroundColor: '#e6e600',
        justifyContent: "center",
        alignItems: "center",
        // alignSelf: "flex-end"
    },
    textmall: {
        width: 30,
        height: 20,
        backgroundColor: '#ff0000',
        justifyContent: "center",
        //alignItems: "center",
        //  alignSelf: "flex-start"
    }
})