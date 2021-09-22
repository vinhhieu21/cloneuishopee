import React, { Component } from 'react';
import { View, FlatList, Text, ScrollView, Image, SafeAreaView, RefreshControl } from 'react-native';
import ItemTypeSale from './item/itemTypeSale';
import fakeDataSale from '../home/data/fakeDataFlashSale';
import ItemDataSale from './item/itemDataSale';

const dataHeader = [
    {
        index: "1",
        text: "Top Picks",
        icon: "",
    },
    {
        index: "2",
        text: "Chỉ 1K",
        icon: "",
    },
    {
        index: "3",
        text: "DEAL HOT 5.5",
        icon: "",
    },
    {
        index: "4",
        text: "FREESHIP EXTRA",
        icon: "",
    },
    {
        text: "THỜI TRANG",
        icon: "",
    },
    {
        index: "5",
        text: "ĐIỆN TỬ",
        icon: "",
    },
    {
        index: "6",
        text: "PHONG CÁCH SỐNG",
        icon: "",
    },
    {
        index: "7",
        text: "HÀNG TIÊU DÙNG",
        icon: "",
    },
    {
        index: "8",
        text: "E-VOUCHER VÀ NẠP THẺ",
        icon: "",
    },
]

export default class screenViewPager extends Component {
    constructor(props){
        super(props);
        this.state={
            refreshing: false,
        }
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
                    <View style={{ height: 75 }}>
                        <FlatList horizontal showsHorizontalScrollIndicator={false}
                            data={dataHeader}
                            renderItem={({ item }) => <ItemTypeSale {...item} getTypeFromList={this.getTypeFromList} />}
                            keyExtractor={( item, index ) => index.toString()}
                        />
                    </View>
                    <Image source={{ uri: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg' }}
                        style={{ height: 80 }}
                    />
                    <View style={{ flexDirection: "row", justifyContent: "flex-end", margin: 10, alignItems: "center" }}>
                        <Text style={{ fontSize: 12 }}>BẮT ĐẦU TRONG</Text>
                        <View style={{
                            width: 25, height: 18, backgroundColor: 'black',
                            marginLeft: 7, alignItems: 'center', justifyContent: "center"
                        }}>
                            <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 12 }}>02</Text>
                        </View>

                        <View style={{
                            width: 25, height: 18, backgroundColor: 'black',
                            marginLeft: 7, alignItems: 'center', justifyContent: "center"
                        }}>
                            <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 12 }}>02</Text>
                        </View>

                        <View style={{
                            width: 25, height: 18, backgroundColor: 'black',
                            marginLeft: 7, alignItems: 'center', justifyContent: "center"
                        }}>
                            <Text style={{ fontWeight: 'bold', color: '#ffffff', fontSize: 12 }}>02</Text>
                        </View>
                    </View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                        <FlatList
                            data={fakeDataSale}
                            renderItem={({ item }) => <ItemDataSale {...item} getTypeFromList={this.getTypeFromList} />}
                            keyExtractor={({ item, index }) => index.toString()}
                        />
                    </ScrollView>
                </ScrollView>
            </View>
        )
    }
}