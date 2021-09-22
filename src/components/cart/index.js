import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList, Switch, CheckBox } from 'react-native'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ListCart from './listCart';
import ItemListSuggest from './item/itemListSuggest';
import { Navigation } from 'react-native-navigation';
import fakeData from '../home/data/fakeData';
import fakeDataNameShop from './data/fakeDataNameShop';
import actionCart from '../../redux/cart/action';
import { connect } from 'react-redux';

class CartScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEnabled: false,
            isCheckedAll: true,
            dataNameShop: [],
            total: 0,
            totalProduct: 0
        }
    }
    static options = {
        topBar: {
            visible: false
        }
    }
    componentDidMount = () => {
        this.props.getProductInCart()
        this.setState({ total: this.props.total, totalProduct: this.props.totalProduct })
    }
    // componentWillReceiveProps = (nextprops) => {
    //     this.setState({dataNameShop: nextprops.listNameShop})
    // }
    toggleSwitch = () => this.setState({ isEnabled: !this.state.isEnabled });
    onChangeCheckedAll = () => this.setState({ isCheckedAll: !this.state.isCheckedAll });
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: "row", marginLeft: 10 }}>
                        <TouchableOpacity onPress={() => {
                            Navigation.pop(this.props.componentId)
                        //    this.props.resetTotal(this.state.total, this.state.totalProduct)
                        }}>
                            <AntDesignIcon name="arrowleft" size={25} color="#ff3300" />
                        </TouchableOpacity>
                        <Text style={styles.textHeader}>Giỏ hàng</Text>
                    </View>
                    <TouchableOpacity style={{ marginHorizontal: 5 }}>
                        <FontAwesomeIcon name="comments" size={25} color="#ff3300" />
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <View style={{ flexDirection: "row", height: 50, width: "100%", backgroundColor: "#ffeb99", alignItems: "center" }}>
                        <MaterialCommunityIcons name="truck-fast" size={25} style={{ marginHorizontal: 10 }} />
                        <Text style={{ marginRight: 10, width: "85%" }}>Nhấn vào mục Mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bán nhé!</Text>
                    </View>
                    <View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        <FlatList
                            data={this.props.listNameShop}
                            renderItem={({ item }) => <ListCart {...item} />}
                            keyExtractor={({ item, index }) => index.toString()}
                            numColumns={1}
                        />
                        </ScrollView>
                        <View style={{ alignItems: "center", flexDirection: "row" }}>
                            <View style={{ width: "30%", height: 1, backgroundColor: "black" }}></View>
                            <Text style={{ marginHorizontal: "5%" }}>Có thể bạn cũng thích</Text>
                            <View style={{ width: "30%", height: 1, backgroundColor: "black" }}></View>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                            <FlatList
                                data={fakeData}
                                renderItem={({ item }) => <ItemListSuggest {...item} />}
                                keyExtractor={({ item, index }) => index.toString()}
                                numColumns={2}
                            />
                        </ScrollView>
                    </View>
                </ScrollView>
                <View style={{ width: "100%", height: 120, backgroundColor: "#ffffff" }}>
                    <View style={{ width: "100%", height: 40, borderBottomColor: "#ebebe0", borderBottomWidth: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ flexDirection: "row", marginLeft: 10, alignItems: "center" }}>
                            <MaterialCommunityIcons name="newspaper" size={25} color="red" />
                            <Text style={{ fontSize: 14, marginLeft: 5 }}>Shopee Voucher</Text>
                        </View>
                        <Text style={{ marginRight: 10, fontSize: 14 }}>Chọn hoặc nhập mã ></Text>
                    </View>

                    <View style={{ width: "100%", height: 40, borderBottomColor: "#ebebe0", borderBottomWidth: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ flexDirection: "row", marginLeft: 15, alignItems: "center" }}>
                            <FontAwesomeIcon name="dollar" size={20} color="red" />
                            <Text style={{ fontSize: 14, marginHorizontal: 5 }}>Bạn chưa có Shopee Xu</Text>
                            <AntDesignIcon name="questioncircleo" size={15} />
                        </View>
                        <Switch
                            style={{ marginRight: 20 }}
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={this.toggleSwitch}
                            value={this.state.isEnabled}
                        />
                    </View>

                    <View style={{ width: "100%", height: 40, borderBottomColor: "#ebebe0", borderBottomWidth: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ flexDirection: "row", marginLeft: 10, alignItems: "center" }}>
                            <CheckBox
                                value={this.state.isCheckedAll}
                                onValueChange={this.onChangeCheckedAll}
                            />
                            <Text style={{ fontSize: 14, marginLeft: 5 }}>Chọn tất cả</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ marginRight: 10 }}>
                                <View style={{ flexDirection: "row" }}>
                                    <Text>Tổng tiền: </Text>
                                    <Text style={{ textDecorationLine: "underline", color: "#ff3300", fontWeight: "bold" }}>đ</Text>
                                    <Text style={{ color: "#ff3300", fontWeight: "bold" }}>{this.props.total}</Text>
                                </View>
                                <Text style={{ color: "#ffd11a", alignSelf: "flex-end" }}>Nhận 0 Xu</Text>
                            </View>
                            <TouchableOpacity style={{
                                width: 80, height: 40, alignItems: "center", 
                                justifyContent: "center", backgroundColor: this.props.totalProduct > 0 ?"#ff3300" : "#b8b894"
                                }}
                                disabled={this.props.totalProduct <= 0}
                            >
                                <Text style={{ fontWeight: "bold", color: "#ffffff" }}>Mua Hàng</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ebebe0'
    },
    header: {
        height: "8%",
        backgroundColor: "#ffffff",
        width: '100%',
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        alignSelf: "center"
    },
    textHeader: {
        fontSize: 20,
        marginLeft: 15
    },
})

const mapStateToProps = (state) => {
    return {
        listNameShop: state.cartReducer.listNameShop,
        total: state.cartReducer.totalInCart,
        totalProduct: state.cartReducer.totalProductInCart,
        //    listProduct: state.cartReducer.listProductInCart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProductInCart: () => {
            dispatch(actionCart.actions.get_product_in_cart())
        },
        // resetTotal: (total, totalProduct) => {
        //     dispatch(actionCart.actions.reset_total(total, totalProduct))
        // }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartScreen)