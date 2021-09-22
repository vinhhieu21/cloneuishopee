import React, { Component } from 'react'
import { View, TouchableOpacity, StyleSheet, Text, Image, Dimensions } from 'react-native'
import actionCart from '../../../redux/cart/action';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window')
class itemList extends Component {
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
                        <Text style={{ marginLeft: 5 }}>{this.props.name.length > 45 ? this.props.name.substr(0, 45) + "..." : this.props.name}</Text>
                        <View style={{ marginHorizontal: 5, marginBottom: 5 }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={{textDecorationLine: "line-through", marginRight: 5}}>
                                    <Text style={{ textDecorationLine: 'underline', fontSize: 12, marginTop: 2 }}>đ</Text>
                                    {this.props.amount}
                                </Text>
                                <Text style={styles.text}>
                                    <Text style={{ textDecorationLine: 'underline', color: '#ff3300', fontSize: 12, marginTop: 2 }}>đ</Text>
                                    0
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{width: width/2-20, height: 40, borderWidth: 1, borderColor: "#ff3300", alignSelf: "center", justifyContent: "center"}}
                            onPress={() => {this.props.addToCart(this.props.id)}}
                        >
                            <Text style={{fontSize: 14, color: "#ff3300", textAlign: "center"}}>Thêm vào giỏ hàng</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        width: width / 2 - 10, height: 240, position: "absolute", flexDirection: "row",
                        justifyContent: "flex-end"
                    }}>
                        <View style={styles.textsale}>
                            <Text style={{ fontWeight: "bold", color: "#ffffff", fontSize: 11 }}>0đ</Text>
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
        height: 290,
        marginTop: 5,
        marginHorizontal: 5,
    },
    text: {
        textAlign: "center",
        fontSize: 15,
        color: '#ff3300',
    },
    textsale: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ff4d4d',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        marginRight: 10
        // alignSelf: "flex-end"
    },
})

const mapStateToProps = (state) => {
    return {
        // prop: state.prop
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {
            dispatch(actionCart.actions.add_to_cart(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(itemList)