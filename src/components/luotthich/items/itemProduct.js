import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { rootHome } from '../../appNavigation';

export default class itemProduct extends Component {
  gotoScreen = () => {
    Navigation.setRoot(rootHome);
  };
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
        <Text style={{color: 'black', marginVertical: 30}}>
          Bạn chưa chọn thích sản phẩm nào
        </Text>
        <TouchableOpacity
          onPress={() => this.gotoScreen()}
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
            Mua sắm ngay!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
