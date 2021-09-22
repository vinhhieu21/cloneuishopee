import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Navigation } from 'react-native-navigation';
import ViewPager from '@react-native-community/viewpager';
import ItemListTime from './item/itemListTime';
import ScreenViewPager from './screenViewPager';

const time = [
  {
    key: 1,
    index: 1,
    time: '13:00',
  },
  {
    key: 2,
    index: 2,
    time: '15:00',
  },
  {
    key: 3,
    index: 3,
    time: '18:00',
  },
  {
    key: 4,
    index: 4,
    time: '21:00',
  },
  {
    key: 5,
    index: 5,
    time: '22:00',
  },
];

export default class FlashSale extends Component {
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
  gotoScreen = ScreenName => {
    Navigation.push(this.props.componentId, {
      component: {
        name: ScreenName,
        options: {
          bottomTabs: {
            visible: false,
          },
        },
      },
    });
  };
  getTimeFromList = index => {
    this.viewPager.current.setPage(index - 1);
    this.setState({ keyViewPager: index });
  };
  renderPage = (page) => {
    return (
      <ScreenViewPager key={page.key} />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{ marginLeft: 10, flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => Navigation.pop(this.props.componentId)}>
              <AntDesignIcon name="arrowleft" size={25} color="#ff3300" />
            </TouchableOpacity>
            <Text style={styles.textHeader}>FLASH SALE</Text>
          </View>
          <TouchableOpacity
            style={{ marginHorizontal: 5 }}
            onPress={() => this.gotoScreen('CartScreen')}>
            <EvilIcons name="share-google" size={30} color="#ff3300" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={time}
            style={{ backgroundColor: '#ffffff' }}
            renderItem={({ item }) => (
              <ItemListTime
                {...item}
                getTimeFromList={this.getTimeFromList}
                keyViewPager={this.state.keyViewPager}
              />
            )}
            keyExtractor={({ item, index }) => index.toString()}
          />
        </View>
        <ViewPager
          initialPage={0}
          ref={this.viewPager}
          style={{ width: '100%', flex: 10 }}
          //scrollEnabled={false}
          onPageSelected={e =>
            this.setState({ keyViewPager: e.nativeEvent.position + 1 })
          }>
          {time.map(p => this.renderPage(p))}
        </ViewPager>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0d1',
  },
  header: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
    flex: 1,
    width: '100%',
  },
  textHeader: {
    fontSize: 16,
    marginLeft: 15,
    color: '#ff3300',
    fontWeight: 'bold',
  },
});
