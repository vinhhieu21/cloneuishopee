import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';
import dataButtonHeader from './data/buttonHeaderFeed';
import ButtonViewPager from './item/itemFeed/buttonViewPager';
import ButtonStory from './item/itemFeed/buttonStory';
import IconIonic from 'react-native-vector-icons/Ionicons';

import ScreenViewTime from './item/itemFeed/screenViewPager';
import ViewPager from '@react-native-community/viewpager';

import fakeData from './data/fakeDataFeed';

class ShopFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyViewPager: 1
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
                options: {
                    bottomTabs: {
                        visible: false
                    }
                }
            }
        })
    }
    _renderHeaderFlatList = () => {
        return (
            <TouchableOpacity style={{ marginVertical: 5, marginLeft: 15 }}>
                <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: "#adad85", marginBottom: 5, justifyContent: "center", alignItems: "center" }}>
                    <IconIonic name="md-person" size={25} />
                </View>
                <Text style={{ fontSize: 11, textAlign: "center" }}>Tin của bạn</Text>
                <View style={{ width: 60, height: 60, position: "absolute", justifyContent: "flex-end", alignItems: "flex-end" }}>
                    <View style={{ width: 20, height: 20, backgroundColor: "#ff3300", borderRadius: 10, justifyContent: "center", alignItems: "center" }}>
                        <IconIonic name="md-add" size={10} color="#ffffff" />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    _renderBodyrFlatList = () => {
        return (
            <View style={{ backgroundColor: "#ffffff", marginTop: 8, marginBottom: 5, borderBottomWidth: 0.5 }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={dataButtonHeader}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <ButtonStory text={item.text} icon={item.icon} />}
                    ListHeaderComponent={this._renderHeaderFlatList}
                />
            </View>
        )
    }
    getTypeFromList = index => {
        this.viewPager.current.setPage(index - 1);
        this.setState({ keyViewPager: index });
    };
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flexDirection: "row", marginLeft: 10 }}>
                        <TouchableOpacity onPress={() => this.gotoScreen("SearchScreen")}>
                            <FeatherIcon name="search" size={25} color="#ff3300" />
                        </TouchableOpacity>
                        <Text style={styles.textHeader}>Shopee Feed</Text>
                    </View>
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
                    </View>
                </View>
                <View>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={dataButtonHeader}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <ButtonViewPager
                            {...item}
                            getTypeFromList={this.getTypeFromList}
                            keyViewPager={this.state.keyViewPager}
                        />}
                    />
                </View>

                <ViewPager
                    initialPage={0}
                    ref={this.viewPager}
                    scrollEnabled={false}
                    onPageSelected={(e) => {
                        this.setState({keyViewPager: e.nativeEvent.position + 1})
                    }}
                    style={{ width: '100%', flex: 10 }}
                >
                    {this.state.keyViewPager === 1 ?
                        <ScreenViewTime fakeData={fakeData} dataButtonHeader={dataButtonHeader} update = {true} /> :
                        <ScreenViewTime update={false} />
                    }
                    {this.state.keyViewPager === 2 ?
                        <ScreenViewTime fakeData={fakeData} dataButtonHeader={dataButtonHeader} update = {true} /> :
                        <ScreenViewTime update={false} />
                    }
                     {this.state.keyViewPager === 3 ? 
                        <ScreenViewTime fakeData={fakeData} dataButtonHeader={dataButtonHeader} update = {true} /> : 
                        <ScreenViewTime update={false}/>
                    }
                     {this.state.keyViewPager === 4 ? 
                        <ScreenViewTime fakeData={fakeData} dataButtonHeader={dataButtonHeader} update = {true} /> : 
                        <ScreenViewTime update={false}/>
                    }
                     {this.state.keyViewPager === 5 ? 
                        <ScreenViewTime fakeData={fakeData} dataButtonHeader={dataButtonHeader} update = {true} /> : 
                        <ScreenViewTime update={false}/>
                    }
                     {this.state.keyViewPager === 6 ? 
                        <ScreenViewTime fakeData={fakeData} dataButtonHeader={dataButtonHeader} update = {true} /> : 
                        <ScreenViewTime update={false}/>
                    }
                    {this.state.keyViewPager === 7 ? 
                        <ScreenViewTime fakeData={fakeData} dataButtonHeader={dataButtonHeader} update = {true} /> : 
                        <ScreenViewTime update={false}/>
                    }
                </ViewPager>

                <View style={{ width: "100%", height: "100%", position: "absolute", justifyContent: "flex-end" }}>
                    <View style={{
                        width: 60, height: 60,
                        backgroundColor: "#ff3300", borderRadius: 30,
                        justifyContent: "center", alignItems: "center", alignSelf: "flex-end",
                        marginRight: 15, marginBottom: 15
                    }}>
                        <IconIonic name="md-add" size={30} color="#ffffff" />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ebebe0"
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

export default connect(mapStateToProps, mapDispatchToProps)(ShopFeed)