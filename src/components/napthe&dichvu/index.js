import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  ScrollView,
  FlatList,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Navigation} from 'react-native-navigation';
import AppIntroSlider from 'react-native-app-intro-slider';
import dataNapTien from './data/fakeDataNapTien';
import dataThanhToan from './data/fakeDataThanhToan';
import dataEVoucher from './data/fakeDataEVoucher';
import dataDuLich from './data/fakeDataDuLich';
import TouchSugges from './items/touchSugges';

const {width, height} = Dimensions.get('window');

export default class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataNapTien: [],
      dataThanhToan: [],
      dataEVoucher: [],
      images: [
        {
          index: 1,
          img: 'https://source.unsplash.com/1024x768/?nature',
        },
        {
          index: 2,
          img: 'https://source.unsplash.com/1024x768/?water',
        },
        {
          index: 3,
          img: 'https://source.unsplash.com/1024x768/?girl',
        },
        {
          index: 4,
          img: 'https://source.unsplash.com/1024x768/?tree',
        },
      ],
    };
  }
  i = 0;
  componentDidMount() {
    this.timeout = setInterval(() => this.tick(), 3000);
    this.setState({
      dataNapTien: dataNapTien,
      dataThanhToan: dataThanhToan,
      dataEVoucher: dataEVoucher,
      dataDuLich: dataDuLich,
    });
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }
  tick = () => {
    // if (this.i === this.props.item.length - 1) {
    //     return;
    // }
    this.slider.goToSlide(this.i);
    this.i += 1;
    if (this.i === this.state.images.length) {
      this.i = 0;
      //clearInterval(this.timeout)
    }
  };
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
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={{marginLeft: 10, flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => Navigation.pop(this.props.componentId)}>
              <AntDesign name="arrowleft" size={25} color="#ff3300" />
            </TouchableOpacity>
            <Text style={styles.textHeader}>Nạp Thẻ & Dịch Vụ</Text>
          </View>
          <TouchableOpacity onPress={() => this.gotoScreen('DonHangScreen')}>
            <Text style={{fontSize: 18, color: '#ff6e00', marginRight: 10}}>
              Đơn Hàng
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView style={{height: height - 50}}>
          <View style={styles.slider}>
            <AppIntroSlider
              ref={ref => (this.slider = ref)}
              data={this.state.images}
              renderItem={({item}) => (
                <View>
                  <Image
                    source={{uri: item.img}}
                    style={{width: width, height: height / 5}}
                  />
                </View>
              )}
              onSlideChange={() => {
                this.i += 1;
              }}
              keyExtractor={({item, index}) => index.toString()}
              showNextButton={false}
              showDoneButton={false}
              activeDotStyle={{
                borderWidth: 1,
                borderColor: '#ffffff',
                width: 6,
                height: 6,
                borderRadius: 3,
              }}
              dotStyle={{
                backgroundColor: '#ffffff',
                width: 6,
                height: 1,
              }}
            />
          </View>
          <View style={{flex: 9}}>
            <View style={styles.component}>
              <View style={{height: 50, justifyContent: 'center'}}>
                <Text style={{fontSize: 20, marginLeft: 10}}>NẠP TIỀN</Text>
              </View>
              <FlatList
                scrollEnabled={true}
                data={dataNapTien}
                renderItem={({item}) => (
                  <TouchSugges
                    text={item.text}
                    name={item.nameicon}
                    color={item.coloricon}
                  />
                )}
                numColumns={4}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>

            <View style={styles.component}>
              <View style={{height: 50, justifyContent: 'center'}}>
                <Text style={{fontSize: 20, marginLeft: 10}}>
                  THANH TOÁN HÓA ĐƠN
                </Text>
              </View>
              <FlatList
                scrollEnabled={true}
                data={dataThanhToan}
                renderItem={({item}) => (
                  <TouchSugges
                    text={item.text}
                    name={item.nameicon}
                    color={item.coloricon}
                  />
                )}
                numColumns={4}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <View style={styles.component}>
              <View style={{height: 50, justifyContent: 'center'}}>
                <Text style={{fontSize: 20, marginLeft: 10}}>E-VOUCHER</Text>
              </View>
              <FlatList
                scrollEnabled={true}
                data={dataEVoucher}
                renderItem={({item}) => (
                  <TouchSugges
                    text={item.text}
                    name={item.nameicon}
                    color={item.coloricon}
                  />
                )}
                numColumns={4}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
            <View style={styles.component}>
              <View style={{height: 50, justifyContent: 'center'}}>
                <Text style={{fontSize: 20, marginLeft: 10}}>DU LỊCH</Text>
              </View>
              <FlatList
                scrollEnabled={true}
                data={dataDuLich}
                renderItem={({item}) => (
                  <TouchSugges
                    text={item.text}
                    name={item.nameicon}
                    color={item.coloricon}
                  />
                )}
                numColumns={4}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </ScrollView>
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
    // flex: 1,
    height: 50,
    width: '100%',
  },
  slider: {
    flex: 2,
  },
  component: {
    marginTop: 10,
    backgroundColor: '#ffffff',
  },
  textHeader: {
    fontSize: 22,
    marginLeft: 15,
  },
});
