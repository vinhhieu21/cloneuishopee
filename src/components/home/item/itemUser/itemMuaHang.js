import React, {Component} from 'react';
import Foundation from 'react-native-vector-icons/Foundation';
import Octicon from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default class itemMuaHang extends Component {
  render() {
    return (
      <View>
        <View style={{marginVertical: 10, backgroundColor: '#ffffff'}}>
          <TouchableOpacity
            style={styles.menu}
            onPress={() => this.props.gotoScreen('DonMuaScreen', 0)}>
            <View style={{flexDirection: 'row'}}>
              <Foundation size={20} name="clipboard-notes" color="#0472b3" />
              <Text style={{marginLeft: 10, fontSize: 16}}>Đơn mua</Text>
            </View>

            <Text style={{color: '#a3a375', fontSize: 13}}>
              Xem lịch sử mua hàng >
            </Text>
          </TouchableOpacity>
          <View style={{flexDirection: 'row', height: 80, marginVertical: 2}}>
            <TouchableOpacity
              onPress={() => this.props.gotoScreen('DonMuaScreen', 0)}
              style={styles.touchDonMua}>
              <Octicon color="#a3a375" name="clippy" size={25} />
              <Text style={styles.text}>Chờ xác nhận</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.gotoScreen('DonMuaScreen', 1)}
              style={styles.touchDonMua}>
              <FeatherIcon name="truck" color="#a3a375" size={25} />
              <Text style={styles.text}>Chờ lấy hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.gotoScreen('DonMuaScreen', 2)}
              style={styles.touchDonMua}>
              <FeatherIcon name="inbox" color="#a3a375" size={25} />
              <Text style={styles.text}>Đang giao</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.gotoScreen('DonMuaScreen', 3)}
              style={styles.touchDonMua}>
              <MaterialIcon name="truck-check" color="#a3a375" size={25} />
              <Text style={styles.text}>Đã giao</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.menu}
            onPress={() => this.props.gotoScreen('NapTheScreen')}>
            <View style={{flexDirection: 'row'}}>
              <FeatherIcon size={20} name="smartphone" color="#62f060" />
              <Text style={{marginLeft: 10, fontSize: 16}}>
                Đơn Nạp thẻ & Dịch vụ
              </Text>
            </View>
            <Text style={{color: '#a3a375', fontSize: 16}}>></Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: '#ffffff'}}>
          <TouchableOpacity
            onPress={() => this.props.gotoScreen('LuotThichScreen')}
            style={styles.menu}>
            <View style={{flexDirection: 'row'}}>
              <FeatherIcon size={20} name="heart" color="#ff6600" />
              <Text style={{marginLeft: 10, fontSize: 16}}>Đã thích</Text>
            </View>
            <Text style={{color: '#a3a375', fontSize: 16}}>></Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menu}
            onPress={() => this.props.gotoScreen('MoiXemScreen')}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons size={20} name="md-time" color="#0472b3" />
              <Text style={{marginLeft: 10, fontSize: 16}}>Mới xem</Text>
            </View>
            <Text style={{color: '#a3a375', fontSize: 16}}>></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons size={20} name="ios-wallet" color="#ff6600" />
              <Text style={{marginLeft: 10, fontSize: 16}}>Ví Shopee</Text>
            </View>
            <Text style={{color: '#a3a375', fontSize: 16}}>></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <View style={{flexDirection: 'row'}}>
              <Ionicons size={20} name="md-wallet" color="#04acd1" />
              <Text style={{marginLeft: 10, fontSize: 16}}>Ví AirPay</Text>
            </View>
            <Text style={{color: '#a3a375', fontSize: 16}}>></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <View style={{flexDirection: 'row'}}>
              <MaterialIcon size={20} name="coin" color="#f7bb05" />
              <Text style={{marginLeft: 10, fontSize: 16}}>Shopee Xu</Text>
            </View>
            <Text style={{color: '#a3a375', fontSize: 16}}>></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <View style={{flexDirection: 'row'}}>
              <FeatherIcon name="star" color="#62f060" size={20} />
              <Text style={{marginLeft: 10, fontSize: 16}}>
                Đánh giá của tôi
              </Text>
            </View>
            <Text style={{color: '#a3a375', fontSize: 16}}>></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <View style={{flexDirection: 'row'}}>
              <MaterialIcon
                name="alpha-v-circle-outline"
                color="#ff6600"
                size={20}
              />
              <Text style={{marginLeft: 10, fontSize: 16}}>Ví Voucher</Text>
            </View>
            <Text style={{color: '#a3a375', fontSize: 16}}>></Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: '#ffffff', marginTop: 10}}>
          <TouchableOpacity style={styles.menu}>
            <View style={{flexDirection: 'row'}}>
              <FeatherIcon name="user" color="#0472b3" size={20} />
              <Text style={{marginLeft: 10, fontSize: 16}}>
                Thiết lập tài khoản
              </Text>
            </View>
            <Text style={{color: '#a3a375', fontSize: 16}}>></Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menu}>
            <View style={{flexDirection: 'row'}}>
              <FeatherIcon name="help-circle" color="#62f060" size={20} />
              <Text style={{marginLeft: 10, fontSize: 16}}>
                Trung tâm trợ giúp
              </Text>
            </View>
            <Text style={{color: '#a3a375', fontSize: 16}}>></Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',
    marginHorizontal: 8,
  },
  touch: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  text: {
    color: '#a3a375',
    fontSize: 13,
    marginTop: 10,
  },
  touchDonMua: {
    width: '25%',
    alignSelf: 'center',
    alignItems: 'center',
  },
});
