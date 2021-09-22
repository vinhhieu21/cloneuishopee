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
import dataMenu from './data/fakeDataMenu';

export default class donHangScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyViewPager: 1,
      dataMenu: [],
    };
    this.viewPager = React.createRef();
  }
  static options = {
    topBar: {
      visible: false,
    },
  };
  componentDidMount() {
    // this.getMenu(this.props.keyViewPager + 1);
    this.setState({dataMenu: dataMenu});
  }
  getMenu = index => {
    this.viewPager.current.setPage(index - 1);
    this.setState({keyViewPager: index});
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={{marginLeft: 10}}
            onPress={() => Navigation.pop(this.props.componentId)}>
            <AntDesignIcon name="arrowleft" size={25} color="#ff3300" />
          </TouchableOpacity>
          <Text style={styles.textHeader}>Đơn Hàng Của Tôi</Text>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataMenu}
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
          style={{width: '100%', flex: 10}}
          scrollEnabled={false}
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
    // justifyContent: 'space-between',
    alignSelf: 'center',
    flex: 1,
    width: '100%',
  },
  textHeader: {
    fontSize: 22,
    marginLeft: 15,
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
