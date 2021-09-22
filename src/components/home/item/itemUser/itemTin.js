import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

export default class itemTin extends Component {
  render() {
    return (
      <View style={{marginHorizontal: 8, width: 70, marginVertical: 10}}>
        <TouchableOpacity>
          <Image
            style={{height: 70, borderRadius: 35, backgroundColor: '#e0e0e0'}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
