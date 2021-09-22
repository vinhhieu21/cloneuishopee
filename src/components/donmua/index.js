import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {Navigation} from 'react-native-navigation';
import ViewPager from '@react-native-community/viewpager';
import ItemMenu from './items/itemMenu';
import ScreenViewPager from './screenViewPager';

const menu = [
  {
    index: 1,
    text: 'Chờ xác nhận',
  },
  {
    index: 2,
    text: 'Chờ lấy hàng',
  },
  {
    index: 3,
    text: 'Đang giao',
  },
  {
    index: 4,
    text: 'Đã giao',
  },
  {
    index: 5,
    text: 'Đã hủy',
  },
  {
    index: 6,
    text: 'Trả hàng',
  },
];

export default class donMuaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyViewPager: 1,
    };
    this.viewPager = React.createRef();
  }
  static options = {
    topBar: {
      visible: false,
    },
  };
  componentDidMount() {
    this.getMenu(this.props.keyViewPager + 1);
  }
  getMenu = index => {
    this.viewPager.current.setPage(index - 1);
    this.setState({keyViewPager: index});
  };
  gotoScreen = (ScreenName) => {
    Navigation.push(this.props.componentId, {
      component: {
        name: ScreenName,
      },
    });
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
            <Text style={styles.textHeader}>Đơn mua</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.touch} onPress={()=>this.gotoScreen('SearchDHScreen')}>
              <AntDesignIcon size={25} name="search1" color="#ff3300" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.touch}>
              <AntDesignIcon size={25} name="message1" color="#ff3300" />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={menu}
          style={styles.menu}
          renderItem={({item}) => (
            <ItemMenu
              style={{marginHorizontal: 20}}
              {...item}
              getMenu={this.getMenu}
              keyViewPager={this.state.keyViewPager}
            />
          )}
          keyExtractor={({item, index}) => index.toString()}
        />
        <ViewPager
          initialPage={0}
          ref={this.viewPager}
          style={{width: '100%', flex: 11}}
          onPageSelected={e =>
            this.setState({keyViewPager: e.nativeEvent.position + 1})
          }>
          <ScreenViewPager key="1" />
          <ScreenViewPager key="2" />
          <ScreenViewPager key="3" />
          <ScreenViewPager key="4" />
          <ScreenViewPager key="5" />
          <ScreenViewPager key="6" />
        </ViewPager>
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
    justifyContent: 'space-between',
    alignSelf: 'center',
    flex: 1,
    width: '100%',
  },
  textHeader: {
    fontSize: 22,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  touch: {
    marginHorizontal: 10,
  },
  menu: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
