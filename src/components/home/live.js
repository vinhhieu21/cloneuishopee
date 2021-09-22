import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import SliderHeaderLive from './item/itemHome/sliderHome';
import dataButtonHeaderLive from './data/buttonHeaderLive';
import ItemListButtonHeaderLive from './item/itemLive/itemListHeader';
import dataLive from './data/fakeDataShopeeLive';
import fakeDataEventLive from './data/fakeDataEventLive';
import ScreenViewPagerLive from './item/itemLive/screenViewpagerLive';
import ScreenViewPagerEvent from './item/itemLive/screenViewPagerEvent';
import ViewPager from '@react-native-community/viewpager';

class ShopLive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyViewPager: 1,
            dataLive: [],
            dataReplay: [],
            dataEventLive: [],
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
        this.viewPager = React.createRef();
    }
    static options = {
        topBar: {
            visible: false
        }
    }
    componentDidMount() {
        this.setState({
            dataLive: dataLive.filter(item => item.living === true),
            dataReplay: dataLive.filter(item => item.living === false),
            dataEventLive: fakeDataEventLive
        })
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
    getTypeFromList = index => {
        this.viewPager.current.setPage(index - 1);
        this.setState({ keyViewPager: index });
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ marginLeft: 10, flexDirection: "row" }}>
                        {this.props.fromScreen ?
                            <TouchableOpacity onPress={() => Navigation.pop(this.props.componentId)}>
                                <AntDesignIcon name="arrowleft" size={25} color="#ff3300" />
                            </TouchableOpacity> : null}
                        <Text style={styles.textHeader}>Shopee Live</Text>
                    </View>
                    {!this.props.fromScreen ?
                        <View style={{ flexDirection: "row", marginRight: 10 }}>
                            <TouchableOpacity style={{ marginHorizontal: 5 }} onPress={() => this.gotoScreen("CartScreen")}>
                                <FeatherIcon name="shopping-cart" size={25} color="#ff3300" />
                                {this.props.totalProduct > 0 ?
                                    <View style={{
                                        marginLeft: 16, width: 14,
                                        height: 14, borderRadius: 7, backgroundColor: "#ff3300",
                                        position: "absolute", marginBottom: 5,
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                        <Text style={{ fontSize: 11, color: "#ffffff" }}>{this.props.totalProduct}</Text>
                                    </View> : null}
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginHorizontal: 5 }}>
                                <FontAwesomeIcon name="comments" size={25} color="#ff3300" />
                            </TouchableOpacity>
                        </View> : null}
                </View>
                <ScrollView
                    stickyHeaderIndices={[1]}
                >
                    <SliderHeaderLive item={this.state.images} />
                    <View style={{ backgroundColor: "#ffffff" }}>
                        <FlatList
                            style={{ marginHorizontal: 5, marginTop: 5 }}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={dataButtonHeaderLive}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => <ItemListButtonHeaderLive keyViewPager={this.state.keyViewPager} {...item} getTypeFromList={this.getTypeFromList} />}
                        />
                    </View>

                    <ViewPager
                        initialPage={0}
                        ref={this.viewPager}
                        scrollEnabled={false}
                        onPageSelected={(e) => {
                            this.setState({ keyViewPager: e.nativeEvent.position + 1 })
                        }}
                    >
                        {
                            this.state.keyViewPager === 1 ?
                                <ScreenViewPagerLive data={this.state.dataLive} update={true} /> :
                                <ScreenViewPagerLive update={false} />
                        }
                        {
                            this.state.keyViewPager === 2 ?
                                <ScreenViewPagerLive data={this.state.dataLive} update={true} /> :
                                <ScreenViewPagerLive update={false} />
                        }
                        {
                            this.state.keyViewPager === 3 ?
                                <ScreenViewPagerEvent data={this.state.dataEventLive} update={true} /> :
                                <ScreenViewPagerEvent update={false} />
                        }
                        {
                            this.state.keyViewPager === 4 ?
                                <ScreenViewPagerLive data={this.state.dataReplay} update={true} /> :
                                <ScreenViewPagerLive update={false} />
                        }
                    </ViewPager>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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

export default connect(mapStateToProps, mapDispatchToProps)(ShopLive)