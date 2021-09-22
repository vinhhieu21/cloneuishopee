import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Navigation } from 'react-native-navigation';
import { connect } from 'react-redux';

class Notification extends Component{
    constructor(props){
        super(props);
        this.state={}
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
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{marginLeft: 10}}>
                        <Text style={styles.textHeader}>Thông báo</Text>
                    </View>
                    <View style={{flexDirection: "row", marginRight: 10}}>
                        <TouchableOpacity style={{ marginHorizontal: 5 }} onPress={() => this.gotoScreen("CartScreen")}>
                            <FeatherIcon name="shopping-cart" size={25} color="#ff3300" />
                            {this.props.totalProduct > 0 ?
                            <View style={{ marginLeft: 16, width: 14, 
                                height: 14, borderRadius: 7, backgroundColor: "#ff3300",
                                position: "absolute", marginBottom: 5,
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <Text style={{fontSize: 11, color: "#ffffff"}}>{this.props.totalProduct}</Text>
                            </View> : null }
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 5 }}>
                            <FontAwesomeIcon name="comments" size={25} color="#ff3300" />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>

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

export default connect(mapStateToProps, mapDispatchToProps)(Notification)