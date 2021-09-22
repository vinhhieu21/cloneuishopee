import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native'
import { Navigation } from 'react-native-navigation'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import dataTopSearch from '../home/data/fakeDataTopSearch'
import dataDanhMuc from '../home/data/dataDanhMuc'
import ItemSearch from './item/itemSearch'

export default class SearchScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dataDanhMuc: []
        }
    }
    static options = {
        topBar: {
            visible: false
        }
    }
    componentDidMount() {
        this.setState({
            data: dataTopSearch.filter(item => item.index <= 8),
            dataDanhMuc: dataDanhMuc.filter(item => item.index <= 8)
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: "row", alignItems: "center", width: "100%", backgroundColor: "#ffffff" }}>
                    <TouchableOpacity style={{ width: '9%', marginTop: 5, marginHorizontal: 5, }} onPress={() => Navigation.pop(this.props.componentId)}>
                        <AntDesignIcon name="arrowleft" size={25} color="#ff3300" />
                    </TouchableOpacity>
                    <View style={{ width: "85%", height: 40, backgroundColor: "#e0e0d1", justifyContent: "center", marginVertical: 5, marginLeft: 5 }}>
                        <TextInput placeholder="Tìm sản phẩm, shop và hơn thế nữa..." />
                    </View>
                </View>
                <View style={{ width: "100%", backgroundColor: '#ffffff', marginTop: 5 }}>
                    <Text style={{ marginLeft: 5, fontWeight: "bold", marginVertical: 5 }}>Tìm Kiếm Phổ Biến</Text>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) => <ItemSearch {...item} />}
                        keyExtractor={({ item, index }) => index.toString()}
                        numColumns={2}
                    />
                </View>
                <View style={{ width: "100%", backgroundColor: '#ffffff', marginTop: 5 }}>
                    <Text style={{ marginLeft: 5, fontWeight: "bold", marginVertical: 5 }}>Danh Mục</Text>
                    <FlatList
                        data={this.state.dataDanhMuc}
                        renderItem={({ item }) => <ItemSearch {...item} />}
                        keyExtractor={({ item, index }) => index.toString()}
                        numColumns={2}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e0e0d1"
    }
})