import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import ItemTin from './itemTin';
import dataTin from '../../data/fakeDataTin';
import AntDesign from 'react-native-vector-icons/AntDesign';
const {width, height} = Dimensions.get('window');
export default class itemBaiViet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataTin: [],
    };
  }
  componentDidMount() {
    this.setState({
      dataTin: dataTin,
    });
  }
  _renderThemMoi = () => {
    return (
      <View
        style={{
          marginHorizontal: 8,
          width: 70,
        }}>
        <TouchableOpacity>
          <View
            style={{
              borderRadius: 35,
              height: 70,
              marginVertical: 10,
              borderColor: '#a3a375',
              borderWidth: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 25}}>+</Text>
          </View>
          <Text>Thêm Mới</Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <View>
        <View
          style={{
            backgroundColor: '#ffffff',
            height: 160,
            marginVertical: 10,
          }}>
          <Text style={{marginHorizontal: 8, fontSize: 18, marginVertical: 3}}>
            Tin Nổi Bật
          </Text>
          <Text style={{color: '#a3a375', fontSize: 15, marginHorizontal: 8}}>
            Hiển thị Tin yêu thích trên trang của bạn
          </Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={this.state.dataTin}
            renderItem={({item}) => <ItemTin {...item} />}
            keyExtractor={(item, index) => index.toString()}
            ListHeaderComponent={this._renderThemMoi}
          />
        </View>
        <View
          style={{
            width: width,
            height: height / 2,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            position: 'absolute',
            marginTop: 160,
          }}>
          <TouchableOpacity>
            <AntDesign
              style={styles.icon}
              name="pluscircle"
              size={70}
              color="#ff6600"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  icon: {
    marginRight: 20,
    marginBottom: 20,
  },
});
