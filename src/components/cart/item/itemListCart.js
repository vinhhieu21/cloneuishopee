import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, Dimensions, CheckBox } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import actionCart from '../../../redux/cart/action';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window')
class itemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: true,
            quantity: 1
        }
    }
    componentDidMount() {
        this.setState({ quantity: this.props.quantity })
    }
    UNSAFE_componentWillReceiveProps(nextprops) {
        //console.log(nextprops.isCheckedAll);
        if (this.props.isCheckedAll !== nextprops.isCheckedAll) {
            if (nextprops.isCheckedAll !== this.state.isChecked) {
                this.setState({ isChecked: nextprops.isCheckedAll })
                if (this.state.quantity !== 0)
                    nextprops.isCheckedAll ? this.props.checkedProduct(this.props.id) : this.props.uncheckedProduct(this.props.id)
            }
        }
    }
    onChangeChecked = () => {
        this.setState({ isChecked: !this.state.isChecked });
        !this.state.isChecked ? this.props.checkedProduct(this.props.id) : this.props.uncheckedProduct(this.props.id)
    }
    render() {
        return (
            this.state.quantity !== 0 ?
                <View style={{ marginVertical: 10, flexDirection: "row" }}>
                    <View style={styles.container}>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flexDirection: "row" }}>
                                <CheckBox style={{ marginLeft: -5, alignSelf: "center" }}
                                    value={this.state.isChecked}
                                    onValueChange={() => {
                                        this.onChangeChecked()
                                    }}
                                    disabled={this.props.isEdit}
                                />
                                <Image source={{ uri: "https://www.bigstockphoto.com/images/homepage/module-6.jpg" }}
                                    style={{ width: 60, height: 60 }}
                                />
                                {!this.props.isEdit ?
                                    <View>
                                        <Text style={{ marginLeft: 5, width: width / 1.5 }}>{this.props.name}</Text>
                                        {this.props.phanloai ?
                                            <Text style={{ marginLeft: 5, fontSize: 12 }}>Phân loại: {this.props.phanloai}</Text> : null}
                                        <View style={{ marginHorizontal: 5, marginBottom: 5 }}>
                                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                {this.props.sale === 0 ?
                                                    <Text style={{ marginRight: 5, color: "#ff3300", fontWeight: "bold" }}>
                                                        <Text style={{ textDecorationLine: 'underline', fontSize: 12, marginTop: 2 }}>đ</Text>
                                                        {this.props.amount}
                                                    </Text> :
                                                    <View style={{ flexDirection: "row" }}>
                                                        <Text style={{ marginRight: 5, textDecorationLine: "line-through" }}>
                                                            <Text style={{ textDecorationLine: 'underline', fontSize: 12, marginTop: 2 }}>đ</Text>
                                                            {this.props.amount}
                                                        </Text>
                                                        <Text style={{ marginRight: 5, color: "#ff3300", fontWeight: "bold" }}>
                                                            <Text style={{ textDecorationLine: 'underline', fontSize: 12, marginTop: 2 }}>đ</Text>
                                                            {this.props.amountsell}
                                                        </Text>
                                                    </View>}
                                            </View>
                                        </View>
                                    </View> : null
                                }
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", marginLeft: 100 }}>
                            <TouchableOpacity style={{ width: 20, height: 20, borderWidth: 0.5, justifyContent: "center", alignItems: "center" }}
                                onPress={() => {
                                    this.props.decreaseProduct(this.props.id)
                                    this.setState({ quantity: this.state.quantity - 1 })
                                }}
                                disabled={this.props.isEdit}
                            >
                                <Text>-</Text>
                            </TouchableOpacity>
                            <Text style={{ width: 40, height: 20, borderWidth: 0.5, justifyContent: "center", textAlign: "center" }}>
                                {this.state.quantity}
                            </Text>
                            <TouchableOpacity style={{ width: 20, height: 20, borderWidth: 0.5, justifyContent: "center", alignItems: "center" }}
                                onPress={() => {
                                    this.props.increaseProduct(this.props.id)
                                    this.setState({ quantity: this.state.quantity + 1 })
                                }}
                                disabled={this.props.isEdit}
                            >
                                <Text>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {this.props.isEdit ?
                        <TouchableOpacity style={{ width: 50, height: 80, backgroundColor: "red", justifyContent: "center", alignItems: "center", alignSelf: "flex-end" }}
                            onPress={() => {
                                this.props.removeProduct(this.props.id);
                                this.setState({ quantity: 0 })
                            }}
                        >
                            <Text style={{ color: "#ffffff", fontWeight: "bold" }}>Xóa</Text>
                        </TouchableOpacity> : null
                    }
                </View> : null
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 3,
        backgroundColor: "#ffffff",
        width: width - 70,
        marginTop: 5,
        marginHorizontal: 5,
        // flexDirection: "row",
        // alignItems: "center",
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
    textliked: {
        width: width / 9,
        height: width / 11,
        backgroundColor: '#e6e600',
        justifyContent: "center",
        //alignItems: "center",
        //  alignSelf: "flex-start"
    }
})

const mapStateToProps = (state) => {
    return {
        //    prop: state.prop
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseProduct: (id) => {
            dispatch(actionCart.actions.increase_product(id))
        },
        decreaseProduct: (id) => {
            dispatch(actionCart.actions.decrease_product(id))
        },
        removeProduct: (id) => {
            dispatch(actionCart.actions.remove_to_cart(id))
        },
        checkedProduct: (id) => {
            dispatch(actionCart.actions.checked_product(id))
        },
        uncheckedProduct: (id) => {
            dispatch(actionCart.actions.unchecked_product(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(itemList)