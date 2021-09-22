import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, FlatList, ScrollView, TextInput } from 'react-native';
import fakeDataTus from '../../data/fakeDataFeed';
import fakeDataComment from '../../data/fakeDataSingleFeed';
import dataIconFeed from '../../data/dataIconFeed';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ItemComment from './itemComment';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get("window");
class ScreenComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataTus: {},
            dataComment: [],
        }
    }
    componentDidMount() {
        this.setState({
            dataTus: fakeDataTus.find(item => item.id === this.props.idTus),
            dataComment: fakeDataComment.filter(item => item.idTus === this.props.idTus),
        })
    }
    _renderStatus = () => {
        return (
            <View style={{ flexDirection: "row", marginHorizontal: 10, borderBottomWidth: 0.5 }}>
                <Image source={{ uri: this.state.dataTus.avatar }} style={{ width: 30, height: 30, borderRadius: 15 }} />
                <Text style={{ fontWeight: "bold", width: width - 40, marginBottom: 10 }}>{this.state.dataTus.name}
                    <Text style={{ fontWeight: "normal" }}> {this.state.dataTus.status}</Text>
                </Text>
            </View>
        )
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
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ marginLeft: 10, flexDirection: 'row' }}>
                        <TouchableOpacity
                            onPress={() => Navigation.dismissModal(this.props.componentId)}>
                            <AntDesignIcon name="arrowleft" size={25} color="#ff3300" />
                        </TouchableOpacity>
                        <Text style={styles.textHeader}>Bình luận</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
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
                <FlatList
                    data={this.state.dataComment}
                    renderItem={({ item }) => <ItemComment {...item} />}
                    keyExtractor={(item, index) => index.toString()}
                    ListHeaderComponent={this._renderStatus}
                />
                <View style={{ width: "100%", height: 90 }}>
                    <View style={{ height: 40, borderBottomWidth: 0.5, borderTopWidth: 0.5 }}>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={dataIconFeed}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item }) => <View style={{ justifyContent: "center", width: width / 8, alignItems: "center" }}>
                                <Image source={{ uri: item.img }} style={{ width: 20, height: 20 }} />
                            </View>}
                        />
                    </View>
                    <View style={{ height: 50, alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Image source={{ uri: 'https://www.bigstockphoto.com/images/homepage/module-6.jpg' }} style={{ width: 30, height: 30, borderRadius: 15, marginRight: 5 }} />
                            <TextInput placeholder="Thêm Bình Luận" style={{ height: 35, width: width / 1.25, borderWidth: 0.5, borderRadius: 20 }} />
                        </View>
                        <TouchableOpacity>
                            <Ionicons name="md-send" size={25} color="pink" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignSelf: 'center',
        height: "8%",
        width: '100%',
    },
    textHeader: {
        fontSize: 18,
        marginLeft: 15,
        //    color: '#ff3300',
        fontWeight: '900',
    },
});

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

export default connect(mapStateToProps, mapDispatchToProps)(ScreenComment)