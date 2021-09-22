import React, { Component } from 'react';
import { View, ScrollView, RefreshControl, Text, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import SliderHeader from './item/sliderHeader';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ItemDataFlashSale from '../home/item/itemHome/itemDataFlashSale';

import ItemThuongHieu from './item/itemThuongHieu';
import ItemSuggestMall from './item/itemSuggestMall';


export default class screenViewPager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
            dataFlashSale: [],
            update: false,
            images: [{
                index: 1,
                img: "https://source.unsplash.com/1024x768/?nature"
            },
            {
                index: 2,
                img: "https://source.unsplash.com/1024x768/?water"
            },
            {
                index: 3,
                img: "https://source.unsplash.com/1024x768/?girl"
            },
            {
                index: 4,
                img: "https://source.unsplash.com/1024x768/?tree"
            }]
        }
    }

    // componentDidMount() {
    //     this.setState({
    //         dataFlashSale: dataFlashSale.filter(item => item.index.valueOf() <= 10),
    //     })
    // }

    shouldComponentUpdate() {
        return this.props.update
    }

    getTypeFromList = (index) => {
        alert(index)
    }

    onRefresh = () => {
        this.setState({ refreshing: true })
        setTimeout(() => {
            this.setState({ refreshing: false })
        }, 2000)
    }
    render() {
        return (
            <View key={this.props.key}>
                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
                    }
                >
                    <SliderHeader item={this.state.images} />
                    <View style={{ backgroundColor: "#ffffff", marginBottom: 10 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <MaterialCommunityIcons name="keyboard-return" size={20} color="#ff3300" style={{ marginHorizontal: 5 }} />
                                <Text style={{ fontSize: 11 }}>Miễn phí trả hàng</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <MaterialCommunityIcons name="shield-check" size={20} color="#ff3300" style={{ marginHorizontal: 5 }} />
                                <Text style={{ fontSize: 11 }}>Chính hãng 100%</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <MaterialCommunityIcons name="truck-fast" size={20} color="#ff3300" style={{ marginHorizontal: 5 }} />
                                <Text style={{ fontSize: 11 }}>Giao miễn phí</Text>
                            </View>
                        </View>
                        <View>
                            <Image source={{ uri: "https://source.unsplash.com/1024x768/?tree" }}
                                style={{ width: "95%", height: 90, alignSelf: "center", marginVertical: 10, borderRadius: 10 }}
                            />
                            <View style={{ alignSelf: "center", width: "90%", height: 90, marginVertical: 10, position: "absolute", alignItems: "flex-end", justifyContent: "center" }}>
                                <View style={{ backgroundColor: "#ffffff", width: 30, height: 30, borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
                                    <AntDesignIcon name="right" size={20} color="#ff3300" />
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ backgroundColor: "#ffffff" }}>
                        <View style={{ flexDirection: "row", justifyContent: 'space-between', marginHorizontal: 8, marginVertical: 10 }}>
                            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                                <Text style={{ color: "#ff3300", fontWeight: "bold" }}>MALL FLASH SALE</Text>
                                <View style={{
                                    width: 25, height: 20, backgroundColor: 'black',
                                    marginLeft: 7, alignItems: 'center', justifyContent: "center"
                                }}>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>02</Text>
                                </View>

                                <View style={{
                                    width: 25, height: 20, backgroundColor: 'black',
                                    marginLeft: 7, alignItems: 'center', justifyContent: "center"
                                }}>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>02</Text>
                                </View>

                                <View style={{
                                    width: 25, height: 20, backgroundColor: 'black',
                                    marginLeft: 7, alignItems: 'center', justifyContent: "center"
                                }}>
                                    <Text style={{ fontWeight: 'bold', color: '#ffffff' }}>02</Text>
                                </View>
                            </View>
                            <TouchableOpacity>
                                <Text style={{ color: "#a3a375", fontSize: 12 }}>Xem tất cả ></Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginVertical: 10 }}>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={this.props.dataFlashSale}
                                renderItem={({ item }) => <ItemDataFlashSale {...item} />}
                                keyExtractor={({ item, index }) => index.toString()}
                            />
                        </View>
                    </View>
                    <View style={{ marginVertical: 10, backgroundColor: "#ffffff" }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 10 }}>
                            <Text style={{ fontSize: 15, fontWeight: "bold" }}>THƯƠNG HIỆU ƯA CHUỘNG</Text>
                            <TouchableOpacity>
                                <Text style={{ color: "#a3a375", fontSize: 12 }}>Xem tất cả ></Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <FlatList
                                data={this.props.dataThuongHieu}
                                renderItem={({ item }) => <ItemThuongHieu {...item} />}
                                keyExtractor={({ item, index }) => index.toString()}
                                numColumns={9}
                            />
                        </ScrollView>
                    </View>

                    <View style={{ marginVertical: 10, backgroundColor: "#ffffff" }}>
                        <Text style={{ fontSize: 15, fontWeight: "bold", margin: 10 }}>GỢI Ý RIÊNG CHO BẠN</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            <FlatList
                                data={this.props.fakeData}
                                renderItem={({ item }) => <ItemSuggestMall {...item} />}
                                keyExtractor={({ item, index }) => index.toString()}
                                numColumns={2}
                            />
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        )
    }
}