import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
// import DataTypeDanhMuc from './data/typeDanhMuc';
import ItemListDanhMuc from './item/itemListDanhMuc';

export default class screenViewPager extends Component {
    shouldComponentUpdate(){
        return this.props.update;
    }
    render() {
        return (
            <View key={this.props.key} style={{ marginHorizontal: 10 }}>
                <FlatList
                    data={this.props.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <ItemListDanhMuc {...item} />}
                    numColumns={3}
                />
            </View>
        )
    }
}