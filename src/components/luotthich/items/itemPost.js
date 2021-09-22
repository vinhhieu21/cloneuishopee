import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
// import {Navigation} from 'react-native-navigation';

export default class itemProduct extends Component {
  render() {
    return (
      <View
        style={{
          marginTop: 50,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{height: 200, width: '50%'}}
          source={{
            uri:
              'https://cdn0.iconfinder.com/data/icons/files-documents/512/YPS__file_document_enlarge_magnifier_magnify_examine_read_paper_page_text-512.png',
          }}
        />
        <Text style={{fontSize: 16, marginTop: 30}}>
          Không có Lượt thích nào
        </Text>
        <Text style={{marginVertical: 15}}>Bạn chưa thích bài viết nào</Text>
        <TouchableOpacity
          onPress={() => this.props.gotoScreen('ShopFeed')}
          style={{
            height: 40,
            backgroundColor: '#ff6600',
            justifyContent: 'center',
            //alignItems:'center'
          }}>
          <Text
            style={{
              marginHorizontal: 10,
              color: '#ffffff',
            }}>
            Khám phá ngay
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
