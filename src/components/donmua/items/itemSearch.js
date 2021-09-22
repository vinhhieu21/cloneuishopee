import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {Navigation} from 'react-native-navigation';

export default class itemSearch extends Component {
  static options = {
    topBar: {
      visible: false,
    },
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{marginLeft: 10, flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => Navigation.pop(this.props.componentId)}>
              <AntDesignIcon name="arrowleft" size={25} color="#ff3300" />
            </TouchableOpacity>
            <Text style={styles.textHeader}>Tìm kiếm đơn hàng</Text>
          </View>
        </View>
        <View style={styles.searchBar}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginHorizontal: 10,
              marginVertical: 10,
              width: '95%',
              height: '70%',
              backgroundColor: '#e0e0e0',
              alignItems: 'center',
            }}>
            <AntDesignIcon style={{}} size={20} name="search1" />
            <TextInput placeholder="Tìm kiếm theo tên Shop, ID Đơn hàng hoặc Tên sản phẩm" />
          </View>
        </View>
        {/* <View style={{flex: 10, width: '100%'}}> */}
          <Image
            style={{flex: 10, width: '100%'}}
            source={{
              uri:
                'https://png.pngtree.com/png-vector/20190803/ourlarge/pngtree-box-unbox-data-user-male-blue-icon-on-abstract-cloud-backgro-png-image_1648849.jpg',
            }}
          />
        {/* </View> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  },
  header: {
    marginTop: 5,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    width: '100%',
    borderBottomWidth: 1,
  },
  textHeader: {
    fontSize: 22,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
