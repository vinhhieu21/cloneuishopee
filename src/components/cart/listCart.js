import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, CheckBox, Dimensions } from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import fakeDataCart from './data/fakeDataCart';
import ItemListCart from './item/itemListCart';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';

const {width, height} = Dimensions.get("window")
class listCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCheckedAll: true,
            data: [],
            isEdit: false,
        }
    }

    componentDidMount() {
        this.setState({ data: this.props.listProduct.filter(item => item.nameShop === this.props.nameShop) })
    }

    // componentWillReceiveProps(nextprops){
    //     console.log("nextprops ",nextprops);
    // //    this.setState({ data: nextprops.listProduct.filter(item => item.nameShop === nextprops.nameShop) })
    // }

    onChangeCheckedAll = () => this.setState({ isCheckedAll: !this.state.isCheckedAll });
    render() {
        return (
            <View style={{ backgroundColor: "#ffffff", marginBottom: 10,width: width}}>
                <View style={{ marginHorizontal: 10 }}>
                    <View style={styles.container}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <CheckBox
                                value={this.state.isCheckedAll}
                                onValueChange={this.onChangeCheckedAll}
                            />
                            {this.props.liked ?
                                <View style={styles.textliked}>
                                    <Text style={{ color: '#ffffff', fontSize: 11 }}>Yêu thích</Text>
                                </View> : null}
                            <TouchableOpacity>
                                <Text style={{ fontWeight: "bold" }}>{this.props.nameShop} ></Text>
                            </TouchableOpacity>
                        </View>
                        
                        <TouchableOpacity onPress={() => {this.setState({isEdit: !this.state.isEdit})}}>
                        {this.state.isEdit ? <Text>Xong</Text> : <Text>Sửa</Text> }
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => <ItemListCart {...item} isEdit = {this.state.isEdit} isCheckedAll = {this.state.isCheckedAll} />}
                        keyExtractor={({ item, index }) => index.toString()}
                    />
                </View>
                <View style={{ width: "100%", height: 1, backgroundColor: "#e0e0d1" }}></View>
                <View style={{flexDirection: "row", marginVertical: 10}}>
                    <MaterialCommunityIcons name="truck-fast" size={25} style={{ marginHorizontal: 10 }} />
                    <Text style={{width: "88%"}}>Miễn phí vận chuyển đơn hàng từ
                        <Text style={{ textDecorationLine: "underline" }}>đ</Text>
                        50.000 (giảm tối đa <Text style={{ textDecorationLine: "underline" }}>đ</Text>20.000);
                        Miễn phí vận chuyển đơn hàng từ <Text style={{ textDecorationLine: "underline" }}>đ</Text>
                        300.000(giảm tối đa <Text style={{ textDecorationLine: "underline" }}>đ</Text>70.000)
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    textliked: {
        width: 50,
        height: 20,
        alignItems: "center",
        backgroundColor: '#ff3300',
        justifyContent: "center",
        marginRight: 5
        //alignItems: "center",
        //  alignSelf: "flex-start"
    },
})
const mapStateToProps = (state) => {
    return {
        listProduct: state.cartReducer.listProductInCart
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(listCart)