import React, { Component } from 'react';
import { View, Image, Text, Dimensions, TouchableOpacity, FlatList, TextInput } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import OcticonsIcon from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import fakeDataSingleTus from '../../data/fakeDataSingleFeed';
import ItemComment from './itemComment';
import { Navigation } from 'react-native-navigation';
import ViewPager from '@react-native-community/viewpager';

const { width, height } = Dimensions.get("window");
export default class itemFeedTus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataComment: [],
            position: 1,
        }
        this.viewPager = React.createRef();
    }
    componentDidMount() {
        let dataRen = fakeDataSingleTus.filter(item => item.idTus === this.props.id);
        let dataComment = [];
        if (dataRen.length > 4) {
            for (let i = 0; i < 4; i++) {
                dataComment.push(dataRen[i])
            }
            this.setState({ dataComment: dataComment });
        } else {
            this.setState({ dataComment: dataRen });
        }
    }
    goToScreenComment = () => {
        Navigation.showModal({
            stack: {
                children: [
                    {
                        component: {
                            name: 'ScreenComment',
                            passProps: {
                                idTus: this.props.id,
                            },
                            options: {
                                topBar: {
                                    visible: false
                                }
                            }
                        }
                    }
                ]
            }
        })
    }
    renderPage(page) {
        return (
            <View key={page.key}>
                <Image style={{ width: width, height: width }} source={{ uri: page.url }} />
            </View>
        );
    }
    render() {
        return (
            <View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 10, marginVertical: 5, alignItems: "center" }}>
                    <View style={{ flexDirection: "row", marginRight: 10, alignItems: "center" }}>
                        <Image source={{ uri: this.props.avatar }} style={{ width: 30, height: 30, borderRadius: 15 }} />
                        <Text style={{ fontWeight: "bold" }}>{this.props.name}</Text>
                    </View>
                    <FeatherIcon name="more-horizontal" size={25} color="#5c5c3d" />
                </View>
                <View>
                    <ViewPager
                        style={{ width: width, height: width }}
                        initialPage={0}
                        //orientation="horizontal"
                        onPageScroll = {(e) => {
                            this.setState({
                                position: e.nativeEvent.position + 1,
                              });
                        }}
                        ref={this.viewPager}>
                        {this.props.img.map(p => this.renderPage(p))}
                    </ViewPager>
                </View>

                {this.props.img.length > 1 ? 
                <View style={{
                    width: width, height: 65, position: "absolute", 
                    justifyContent: "flex-end", alignItems: "flex-end",
                }}>
                    <View style={{ width: 40, height: 20, backgroundColor: "hsl(60, 20%, 10%)", marginRight: 20, alignItems: "center", borderRadius: 20 }}>
                        <Text style={{color: "#ffffff"}}>{this.state.position}/{this.props.img.length}</Text>
                    </View>
                </View> : null }
                
                <View style={{ justifyContent: "space-between", margin: 10, flexDirection: "row" }}>
                    <View style={{ flexDirection: "row" }}>
                        <FeatherIcon name="heart" size={20} />
                        <Text style={{ marginHorizontal: 5 }}>{this.props.like}</Text>
                        <OcticonsIcon name="comment" size={20} style={{ marginLeft: 5 }} />
                        <Text style={{ marginHorizontal: 5 }}>{this.props.cmt}</Text>
                        <FeatherIcon name="eye" size={20} style={{ marginLeft: 5 }} />
                        <Text style={{ marginHorizontal: 5 }}>{this.props.view}</Text>
                    </View>
                    <MaterialCommunityIcons name="share-outline" size={20} />
                </View>
                <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ fontWeight: "bold" }}>{this.props.name} <Text style={{ fontWeight: "normal" }}>{this.props.status}</Text></Text>
                </View>
                <TouchableOpacity style={{ marginLeft: 10, marginTop: 5 }}
                    onPress={() => { this.goToScreenComment() }}
                >
                    <Text>Xem toàn bộ {this.props.cmt} Bình luận</Text>
                </TouchableOpacity>
                <View>
                    <FlatList
                        scrollEnabled={false}
                        data={this.state.dataComment}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <ItemComment {...item} />}
                    />
                </View>
                <View style={{ justifyContent: "space-between", marginHorizontal: 10, flexDirection: "row" }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image source={{ uri: "https://www.bigstockphoto.com/images/homepage/module-6.jpg" }} style={{ width: 30, height: 30, borderRadius: 15 }} />
                        <TextInput placeholder="Thêm Bình Luận" style={{ width: width / 1.5 }} />
                    </View>
                    <View style={{ flexDirection: "row", alignSelf: "center" }}>
                        <Image source={{ uri: "https://www.emojimeaning.com/img/img-apple-160/1f60d.png" }} style={{ width: 20, height: 20, marginRight: 5 }} />
                        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxDQC9nIQBn8FJXaoUMMN7dYqzzW8cs_-cq9ELWXN7Yok8I8pL&usqp=CAU" }} style={{ width: 20, height: 20, marginRight: 5 }} />
                        <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0UkU5UuPFndXq0yiJSkN5-_s6RRksvG-50XogbdyTq_HpCoHe&usqp=CAU" }} style={{ width: 20, height: 20 }} />
                    </View>
                </View>
            </View >
        )
    }
}