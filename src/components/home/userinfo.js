import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ItemMuaHang from './item/itemUser/itemMuaHang';
import ItemBaiViet from './item/itemUser/itemBaiViet';
import ViewPager from '@react-native-community/viewpager';
import {Navigation} from 'react-native-navigation';

const {width, height} = Dimensions.get('window');

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 1,
    };
    this.viewPager = React.createRef();
  }
  static options = {
    topBar: {
      visible: false,
    },
  };
  gotoScreen = (ScreenName, index = 0) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: ScreenName,
        passProps: {
          keyViewPager: index,
          //  status: 'online'
        },
        options: {
          bottomTabs: {
            visible: false,
          },
        },
      },
    });
  };
  onPress = index => {
    this.viewPager.current.setPage(index);
    if (index === 0) {
      this.setState({key: 1});
    } else {
      this.setState({key: 2});
    }
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <ScrollView style={{height: height}}> */}
          <View style={styles.header}>
            <View style={styles.iconHeader}>
              <View
                style={{
                  flexDirection: 'row',
                  marginRight: 10,
                  marginVertical: 10,
                }}>
                <TouchableOpacity style={{marginHorizontal: 5}}>
                  <FeatherIcon name="settings" size={25} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity style={{marginHorizontal: 5}}>
                  <FeatherIcon name="shopping-cart" size={25} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity style={{marginHorizontal: 5}}>
                  <FontAwesomeIcon name="comments" size={25} color="#ffffff" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.avatar_login_header}>
              <Image
                source={{
                  uri:
                    'https://www.bigstockphoto.com/images/homepage/module-6.jpg',
                }}
                style={{width: 50, height: 50, borderRadius: 25}}
              />
              <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <TouchableOpacity style={styles.buttonSignInHeader}>
                  <Text style={{color: '#ff6600', fontSize: 13}}>
                    Đăng nhập
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSignUpHeader}>
                  <Text style={{color: '#ffffff', fontSize: 13}}>Đăng ký</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              // justifyContent: 'space-between',
              height: 50,
              backgroundColor: '#ffffff',
            }}>
            <TouchableOpacity
              style={this.state.key === 1 ? styles.touch : styles.untouch}
              onPress={() => {
                this.onPress(0);
              }}>
              <Text style={{alignSelf: 'center'}}>Mua hàng</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={this.state.key === 2 ? styles.touch : styles.untouch}
              onPress={() => {
                this.onPress(1);
              }}>
              <Text style={{alignSelf: 'center'}}>Bài viết</Text>
            </TouchableOpacity>
          </View>
          <ViewPager
            style={{flex: 10}}
            initialPage={0}
            ref={this.viewPager}
            onPageSelected={e => {
              this.setState({key: e.nativeEvent.position + 1});
            }}>
            <ScrollView key="1">
              <ItemMuaHang gotoScreen={this.gotoScreen} />
            </ScrollView>
            <ScrollView key="2">
              <ItemBaiViet />
            </ScrollView>
          </ViewPager>
        {/* </ScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1d1d1',
  },
  header: {
    flex: 2,
    backgroundColor: '#ff6600',
    width: '100%',
  },
  iconHeader: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textHeader: {
    fontSize: 20,
    marginLeft: 15,
  },
  avatar_login_header: {
    marginHorizontal: 10,
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: '60%',
  },
  buttonSignInHeader: {
    width: 80,
    height: 30,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  buttonSignUpHeader: {
    width: 80,
    height: 30,
    backgroundColor: '#ff6600',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ffffff',
  },
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
    borderBottomWidth: 3,
    borderBottomColor: '#ff6600',
  },
  untouch: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
