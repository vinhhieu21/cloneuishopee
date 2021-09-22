import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView, ActivityIndicator } from 'react-native'
import dataButtonHeader from '../../data/buttonHeaderFeed';
import ButtonStory from './buttonStory';
import IconIonic from 'react-native-vector-icons/Ionicons';

import fakeData from '../../data/fakeDataFeed';
import ItemFeedTus from './itemFeedTus';

export default class screenViewPager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fakeData: [],
            dataButtonHeader: [],
        }
    }
    componentDidMount(){
        // this.setState({
        //     fakeData: fakeData, 
        //     dataButtonHeader: dataButtonHeader,
        // })
    }
    shouldComponentUpdate(){
        return this.props.update;
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
                    data={this.props.dataButtonHeader}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <ButtonStory text={item.text} icon={item.icon} />}
                    ListHeaderComponent={this._renderHeaderFlatList}
                />
            </View>
        )
    }
    render() {
        return (
            <View style={{ backgroundColor: "#ffffff" }}>
                {this.props.fakeData ? 
                <FlatList
                    // horizontal
                    // showsHorizontalScrollIndicator={false}
                    data={this.props.fakeData}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <ItemFeedTus {...item} />}
                    ListHeaderComponent={this._renderBodyrFlatList}
                />: <ActivityIndicator />}
            </View> 
        )
    }
}

const styles = StyleSheet.create({

})