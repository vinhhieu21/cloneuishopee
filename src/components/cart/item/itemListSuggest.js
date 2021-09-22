import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
export default class itemList extends Component {
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
                    <View style={{marginVertical: 10}}>
                        <Text style={{ marginLeft: 5, marginBottom: 10 }}>{this.props.name.length > 50 ? this.props.name.substr(0, 50) + "..." : this.props.name}</Text>
                        <View style={{ marginHorizontal: 5, marginBottom: 5 }}>
                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                                <Text style={{marginRight: 5, color: "#ff3300"}}>
                                    <Text style={{ textDecorationLine: 'underline', fontSize: 12, marginTop: 2, fontWeight: "900" }}>đ</Text>
                                    {this.props.amount}
                                </Text>
                                <Text>Đã bán {this.state.selled}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        width: width / 2 - 10, height: 240, position: "absolute", flexDirection: "row",
                        justifyContent: this.props.liked ? "space-between" : "flex-end"
                    }}>
                        {this.props.liked ?
                            <View style={styles.textliked}>
                                <Text style={{ color: '#ffffff', fontSize: 11 }}>Yêu thích</Text>
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
        height: 260,
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
        width: 50,
        height: 25,
        textAlign: "center",
        backgroundColor: '#ff3300',
        justifyContent: "center",
        //alignItems: "center",
        //  alignSelf: "flex-start"
    }
})