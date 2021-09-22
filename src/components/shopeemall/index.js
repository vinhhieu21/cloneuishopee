import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Navigation } from 'react-native-navigation';
import ViewPager from '@react-native-community/viewpager';
import typeDataShopeeMall from './data/typeDataShopeeMall';
import ItemListHeader from './item/itemListHeader';
import ItemListGridPosition from './item/itemListGridPosition';
import ScreenViewPager from './screenViewPager';

import fakeData from '../home/data/fakeData';
import dataFlashSale from '../home/data/fakeDataFlashSale';
import dataThuongHieu from './data/dataThuongHieu';

export default class FlashSale extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyViewPager: 1,
            showed: false,
            dataFlashSale: [],
            //showedMore: false,
        }
        this.viewPager = React.createRef();
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
            }
        })
    }
    getTypeFromList = (index) => {
        //alert(index)
        this.viewPager.current.setPage(index - 1)
        this.setState({ keyViewPager: index,showed: false  })
    }
    renderPage = (page) => {
        return (
            this.state.keyViewPager === page.key ?
                <ScreenViewPager key={page.key} fakeData={fakeData} dataThuongHieu={dataThuongHieu} dataFlashSale={this.state.dataFlashSale} update={true} /> :
                <ScreenViewPager key={page.key} update={false} />
        );
    }
    componentDidMount() {
        this.setState({
            dataFlashSale: dataFlashSale.filter(item => item.index.valueOf() <= 10),
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ marginLeft: 10, flexDirection: "row" }}>
                        <TouchableOpacity onPress={() => Navigation.pop(this.props.componentId)}>
                            <AntDesignIcon name="arrowleft" size={25} color="#ff3300" />
                        </TouchableOpacity>
                        <Text style={styles.textHeader}>Shopee Mall</Text>
                    </View>
                    <View style={{ marginHorizontal: 10, flexDirection: "row" }}>
                        <TouchableOpacity style={{ marginHorizontal: 5 }} onPress={() => this.gotoScreen("SearchScreen")}>
                            <FeatherIcon name="search" size={20} color="#ff3300" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 5 }} >
                            <FeatherIcon name="more-vertical" size={20} color="#ff3300" />
                        </TouchableOpacity>
                    </View>
                    {/* {this.state.showedMore ?
                        <View style={{position: "absolute", width: 50, height: 50, backgroundColor: "black"}}
                        onTouchCancel={() => this.setState({ showedMore: false })}
                        >
                            <Text>abvlksnvas</Text>
                        </View> : null} */}
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <FlatList
                        horizontal showsHorizontalScrollIndicator={false}
                        data={typeDataShopeeMall}
                        style={{ backgroundColor: "#ffffff" }}
                        renderItem={({ item }) => <ItemListHeader {...item} getTypeFromList={this.getTypeFromList} keyViewPager={this.state.keyViewPager} />}
                        keyExtractor={({ item, index }) => index.toString()}
                    />
                    <View style={{ backgroundColor: "#ffffff", justifyContent: "center" }}>
                        <TouchableOpacity style={{ marginHorizontal: 5 }} onPress={() => { this.setState({ showed: true }) }}>
                            <AntDesignIcon name="down" size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <View style={{flex: 10 }}><ScreenViewPager /></View> */}
                <ViewPager initialPage={0}
                    ref={this.viewPager}
                    style={{ flex: 10 }}
                    scrollEnabled={false}
                    onPageSelected={(e) => {
                        this.setState({ keyViewPager: e.nativeEvent.position + 1 })
                        // this.viewPager.current.setPage(e.nativeEvent.position)
                    }}
                >
                    {typeDataShopeeMall.map(p => this.renderPage(p))}
                </ViewPager>

                {this.state.showed ?
                    <View style={{ width: "100%", height: "70%", backgroundColor: "#ffffff", position: "absolute", marginTop: "18%" }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ marginLeft: 10 }}>DANH MỤC</Text>
                            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => { this.setState({ showed: false }) }}>
                                <AntDesignIcon name="up" size={20} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={typeDataShopeeMall}
                                style={{ backgroundColor: "#ffffff" }}
                                renderItem={({ item }) => <ItemListGridPosition {...item} getTypeFromList={this.getTypeFromList} keyViewPager={this.state.keyViewPager} />}
                                keyExtractor={({ item, index }) => index.toString()}
                                numColumns={4}
                            />
                        </View>
                    </View> : null}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e0e0d1"
    },
    header: {
        backgroundColor: "#ffffff",
        marginTop: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        alignSelf: "center",
        flex: 1,
        width: "100%"
    },
    textHeader: {
        fontSize: 16,
        marginLeft: 15,
        color: "#ff3300",
        fontWeight: "bold",
    },
})