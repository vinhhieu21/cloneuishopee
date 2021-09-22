import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Navigation} from 'react-native-navigation';
import ListProduct from './item/recyclerlistproduct';
const {height} = Dimensions.get('window');
export default class moiXemScreen extends Component {
  static options = {
    topBar: {
      visible: false,
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => Navigation.pop(this.props.componentId)}>
            <AntDesign name="arrowleft" size={25} color="#ff3300" />
          </TouchableOpacity>
          <Text style={styles.textHeader}>Mới Xem</Text>
        </View>
        <View style={{flex: 11}}>
          <ListProduct />
        </View>
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
    backgroundColor: '#ffffff',
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    flex: 1,
    // height: 50,
    width: '100%',
  },
  textHeader: {
    marginLeft: 15,
    fontSize: 22,
  },
});
