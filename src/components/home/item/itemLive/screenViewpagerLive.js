import React, { Component } from 'react';
import { View, ScrollView, FlatList, ActivityIndicator } from 'react-native';
import ItemListBodyLive from './itemListBodyLive';

export default class ScreenViewPager extends Component {
    shouldComponentUpdate(){
        return this.props.update;
    }
    render() {
        return (
            <View>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}>
                    <FlatList
                        style={{ marginHorizontal: 5, marginTop: 5 }}
                        data={this.props.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <ItemListBodyLive {...item} />}
                        numColumns={2}
                    />
                </ScrollView>
            </View>
        )
    }
}