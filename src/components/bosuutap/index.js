import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native'
import { Navigation } from 'react-native-navigation'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'
import dataSuuTap from '../home/data/fakeDataTopSearch'
import ItemSuuTap from './item/ItemSuuTap'

export default class BoSuuTap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSuuTap: []
        }
    }
    static options = {
        topBar: {
            visible: false
        }
    }
    componentDidMount(){
        this.setState({dataSuuTap: dataSuuTap})
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: "row", alignItems: "center", width: "100%", backgroundColor: "#ffffff", height: 50 }}>
                    <TouchableOpacity style={{ width: '9%', marginTop: 5, marginHorizontal: 5 }} onPress={() => Navigation.pop(this.props.componentId)}>
                        <AntDesignIcon name="arrowleft" size={25} color="#ff3300" />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles.textHeader}>Bộ sưu tập yêu thích</Text>
                    </View>
                </View>
                <View style={{ width: "100%", backgroundColor: '#ffffff', marginTop: 5 }}>
                    <FlatList
                        data={this.state.dataSuuTap}
                        renderItem={({ item }) => <ItemSuuTap {...item} />}
                        keyExtractor={({ item, index }) => index.toString()}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff"
    },
    textHeader: {
        fontSize: 20,
        marginLeft: 15
    },
})