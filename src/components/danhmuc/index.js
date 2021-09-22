import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native'
import { Navigation } from 'react-native-navigation'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import DataTypeDanhMuc from './data/typeDanhMuc';
import ItemListTypeDanhMuc from './item/itemListTypeDanhMuc';
import ScreenViewPager from './screenViewPager';
import ViewPager from '@react-native-community/viewpager';

export default class DanhMuc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyViewPager: 1
        }
        this.viewPager = React.createRef()
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
    renderPage = (page) => {
        return (
            this.state.keyViewPager === page.id ?
                <ScreenViewPager key={page.id} data={page.data} update={true} /> :
                <ScreenViewPager key={page.id} data={page.data} update={false} />
        );
    }
    getTypeFromList = (index) => {
        //alert(index)
        this.viewPager.current.setPageWithoutAnimation(index - 1);
        this.setState({ keyViewPager: index })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: "#ffffff" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 10, width: "100%", backgroundColor: "#ffffff" }}>
                        <TouchableOpacity style={{ width: '9%', marginTop: 5, marginHorizontal: 5, }} onPress={() => Navigation.pop(this.props.componentId)}>
                            <AntDesignIcon name="arrowleft" size={25} color="#ff3300" />
                        </TouchableOpacity>
                        <Text style={{ fontSize: 20 }}>Tất cả danh mục</Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                    <View style={{ flex: 1 }}>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={DataTypeDanhMuc}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => <ItemListTypeDanhMuc {...item} getTypeFromList={this.getTypeFromList} keyViewPager={this.state.keyViewPager} />}
                        />
                    </View>
                    <View style={{ flex: 4, backgroundColor: "#ffffff" }}>
                        <ViewPager initialPage={0}
                            ref={this.viewPager}
                            scrollEnabled={false}
                            // orientation="vertical"
                            onPageSelected={(e) => {
                                this.setState({ keyViewPager: e.nativeEvent.position + 1 })
                                // this.viewPager.current.setPage(e.nativeEvent.position)
                            }}
                        >
                            {DataTypeDanhMuc.map(p => this.renderPage(p))}
                        </ViewPager>
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