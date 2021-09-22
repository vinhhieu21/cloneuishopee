import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import ViewPager from '@react-native-community/viewpager';
import {Navigation} from 'react-native-navigation';
import ItemProduct from './items/itemProduct';
import ItemPost from './items/itemPost';

const {width, height} = Dimensions.get('window');

export default class luotThich extends Component {
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
  gotoScreen = ScreenName => {
    Navigation.push(this.props.componentId, {
      component: {
        name: ScreenName,
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
          <View style={{marginLeft: 10, flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => Navigation.pop(this.props.componentId)}>
              <AntDesign name="arrowleft" size={25} color="#ff3300" />
            </TouchableOpacity>
            <Text style={styles.textHeader}>Lượt Thích</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={styles.touchHeader}>
              <AntDesign size={25} name="message1" color="#ff3300" />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{flex: 1, flexDirection: 'row', backgroundColor: '#ffffff'}}>
          <TouchableOpacity
            style={this.state.key === 1 ? styles.selected : styles.unSelected}
            onPress={() => {
              this.onPress(0);
            }}>
            <Text
              style={
                this.state.key === 1
                  ? styles.textSelected
                  : styles.textUnSelected
              }>
              Products (0)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={this.state.key === 2 ? styles.selected : styles.unSelected}
            onPress={() => {
              this.onPress(1);
            }}>
            <Text
              style={
                this.state.key === 2
                  ? styles.textSelected
                  : styles.textUnSelected
              }>
              Posts (0)
            </Text>
          </TouchableOpacity>
        </View>
        {/* <View style={{flex: 10, backgroundColor: 'green'}} /> */}
        <ViewPager
          style={{flex: 11}}
          initialPage={0}
          ref={this.viewPager}
          onPageSelected={e => {
            this.setState({key: e.nativeEvent.position + 1});
          }}>
          <ScrollView key="1">
            <ItemProduct />
          </ScrollView>
          <ScrollView key="2">
            <ItemPost gotoScreen={this.gotoScreen} />
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
    fontSize: 20,
    marginLeft: 15,
  },
  touchHeader: {
    marginHorizontal: 10,
  },
  //   menu: {
  //     flexDirection: 'row',
  //     justifyContent: 'space-between',
  //     height: 50,
  //     alignItems: 'center',
  //     marginHorizontal: 8,
  //   },
  selected: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#ff6600',
  },
  unSelected: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  textSelected: {
    alignSelf: 'center',
    fontSize: 18,
    color: '#ff6600',
    fontWeight: 'bold',
  },
  textUnSelected: {
    alignSelf: 'center',
    fontSize: 18,
  },
});
