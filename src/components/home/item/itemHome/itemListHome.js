import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
export default class itemListHome extends Component {
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
                                <View style={{ marginHorizontal: 2, flexDirection: "row" }}>
                                    <Text style={{ textDecorationLine: 'underline', color: '#ff3300', fontSize: 12, marginTop: 2 }}>đ</Text>
                                    <Text style={styles.text}>{this.props.amount}</Text>
                                </View>
                                <View style={{ marginHorizontal: 2 }}>
                                    <Text style={{ fontSize: 11 }}>
                                        Đã bán {this.state.selled}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        width: width / 2 - 10, height: 240, position: "absolute", flexDirection: "row",
                        justifyContent: this.props.liked ? "space-between" : "flex-end"
                    }}>
                        {this.props.liked ?
                            <View style={styles.textliked}>
                                <Text style={{ color: '#ff1a1a', fontSize: 11 }}>Yêu thích</Text>
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
        height: 240,
        marginTop: 5,
        marginHorizontal: 5,
    },
    text: {
        textAlign: "center",
        fontSize: 15,
        color: '#ff3300',
    },
    textsale: {
        width: width / 12,
        height: width / 11,
        backgroundColor: '#e6e600',
        justifyContent: "center",
        alignItems: "center",
        // alignSelf: "flex-end"
    },
    textliked: {
        width: width / 9,
        height: width / 11,
        backgroundColor: '#e6e600',
        justifyContent: "center",
        //alignItems: "center",
        //  alignSelf: "flex-start"
    }
})