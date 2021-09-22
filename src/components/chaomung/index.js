import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import { Navigation } from 'react-native-navigation'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import FeatherIcon from 'react-native-vector-icons/Feather'
import ItemList from './item/itemList'
import fakeData from '../home/data/fakeData'
import { connect } from 'react-redux';

class ChaoMungScreen extends Component {
    constructor(props){
        super(props);
        this.state={}
    }
    static options = {
        topBar: {
            visible: false
        }
    }
    gotoScreen = (ScreenName) => {
        Navigation.push(this.props.componentId, {
            component: {
                name: ScreenName,
                options: {
                    bottomTabs: {
                        visible: false
                    }
                }
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: "#ffffff" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10, width: "100%", backgroundColor: "#ffffff" }}>
                        <TouchableOpacity style={{ width: '9%', marginTop: 5, marginHorizontal: 5, }} onPress={() => Navigation.pop(this.props.componentId)}>
                            <AntDesignIcon name="arrowleft" size={25} color="#ff3300" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20 }}>Gói Chào Mừng</Text>
                    </View>
                </View>
                <ScrollView>
                    <View style={{ width: "100%", backgroundColor: "#ffffff", height: 350 }}>
                        <Image source={{ uri: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg' }}
                            style={{ width: "100%", height: 120 }}
                        />
                        <Text style={{ marginVertical: 10, marginHorizontal: 5, fontSize: 14, fontWeight: "600" }}>VOUCHER DÀNH CHO KHÁCH HÀNG MỚI</Text>
                        <View style={{ marginHorizontal: 5, borderWidth: 0.5, height: "25%", flexDirection: "row" }}>
                            <Image source={{ uri: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg' }}
                                style={{ width: "25%", height: "100%" }}
                            />
                            <View style={{ justifyContent: "center", marginHorizontal: 10, width: "55%" }}>
                                <Text style={{ fontSize: 14, fontWeight: "bold" }}>Đơn tối thiểu <Text style={{ textDecorationLine: "underline" }}>đ</Text>0</Text>
                                <Text style={{ borderWidth: 0.5, borderColor: "#ff3300", color: "#ff3300", fontSize: 11, width: "65%", textAlign: "center" }}>Tất cả hình thức thanh toán</Text>
                                <Text style={{ color: "#ff3300", fontSize: 12 }}>Sắp hết hạn: Còn 1 ngày</Text>
                            </View>
                            <View style={{ justifyContent: "center" }}>
                                <TouchableOpacity style={{ width: 35, height: 20, backgroundColor: "#ff3300", alignContent: "center", justifyContent: "center" }}>
                                    <Text style={{ color: "#ffffff", fontSize: 12, fontWeight: "bold", textAlign: "center" }}>Lưu</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ marginTop: 10, marginHorizontal: 5, flexDirection: "row", marginBottom: 20 }}>
                            <View style={{ borderTopWidth: 0.5, borderBottomWidth: 0.5, width: "49%", flexDirection: "row" }}>
                                <Image source={{ uri: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg' }}
                                    style={{ width: "25%", height: 80 }}
                                />
                                <View style={{ marginHorizontal: 10 }}>
                                    <Text style={{ fontSize: 12, fontWeight: "bold" }}>Giảm 50%</Text>
                                    <Text style={{ fontSize: 11 }}>Đơn giá tối thiểu<Text style={{ textDecorationLine: "underline" }}>đ</Text>0</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <Text style={{ borderWidth: 0.5, fontSize: 9, marginRight: 3 }}>Người mới</Text>
                                        <Text style={{ borderWidth: 0.5, fontSize: 9 }}>Thanh toán...</Text>
                                    </View>
                                    <View style={{ marginTop: 10, alignItems: "center" }}>
                                        <TouchableOpacity style={{ width: "100%", height: 20, backgroundColor: "#ff3300", alignContent: "center", justifyContent: "center" }}>
                                            <Text style={{ color: "#ffffff", fontSize: 12, fontWeight: "bold", textAlign: "center" }}>Lưu</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>

                            <View style={{ borderTopWidth: 0.5, borderBottomWidth: 0.5, width: "49%", flexDirection: "row", marginLeft: 5 }}>
                                <Image source={{ uri: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg' }}
                                    style={{ width: "25%", height: 80 }}
                                />
                                <View style={{ marginHorizontal: 10 }}>
                                    <Text style={{ fontSize: 12, fontWeight: "bold" }}>Giảm 50%</Text>
                                    <Text style={{ fontSize: 11 }}>Đơn giá tối thiểu<Text style={{ textDecorationLine: "underline" }}>đ</Text>0</Text>
                                    <Text style={{ borderWidth: 0.5, fontSize: 9 }}>Áp dụng khi thanh toán...</Text>
                                    <View style={{ marginTop: 10, alignItems: "center" }}>
                                        <TouchableOpacity style={{ width: 100, height: 20, backgroundColor: "#ff3300", alignContent: "center", justifyContent: "center" }}>
                                            <Text style={{ color: "#ffffff", fontSize: 12, fontWeight: "bold", textAlign: "center" }}>Lưu</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", height: 40, backgroundColor: "#ffffff", marginTop: 10 }}>
                        <View style={{ width: "50%", alignSelf: "center" }}>
                            <Text style={{ alignSelf: "center" }}>Quà tặng</Text>
                        </View>
                        <View style={{ width: "50%", alignSelf: "center" }}>
                            <Text style={{ alignSelf: "center" }}>Deal độc quyền</Text>
                        </View>
                    </View>
                    <View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                            <FlatList
                                data={fakeData}
                                renderItem={({ item }) => <ItemList {...item} />}
                                keyExtractor={({ item, index }) => index.toString()}
                                numColumns={2}
                            />
                        </ScrollView>
                    </View>
                    <View style={{height: 60}}></View>
                </ScrollView>
                <View style={{ width: "100%", height: "100%", justifyContent: "flex-end", position: "absolute", }}>
                    <View style={{ width: "100%", height: 60, backgroundColor: "#ffffff", flexDirection: "row", justifyContent: "space-between" }}>
                        <Text style={{ width: "70%", marginHorizontal: 10 }}>Thêm sản phẩm vào giỏ để hưởng Miễn Phí Vận Chuyển</Text>
                        <TouchableOpacity style={{ backgroundColor: "#ff3300", width: 80 }}
                            onPress={() => {this.gotoScreen("CartScreen")}}
                        >
                            <FeatherIcon name="shopping-cart" size={30} color="#ffffff" style={{ alignSelf: "center", marginTop: 15 }} />
                            <Text style={{ position: "absolute", width: 18, height: 18, borderRadius: 9, backgroundColor: "#ffffff", marginLeft: 48, marginTop: 14, textAlign: "center", color: "#ff3300" }}>
                                {this.props.totalProduct}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e0e0d1",
    }
})


const mapStateToProps = (state) => {
    return {
        totalProduct: state.cartReducer.totalProduct
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // dispatch1: () => {
        //     dispatch(actionCreator)
        // }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChaoMungScreen)