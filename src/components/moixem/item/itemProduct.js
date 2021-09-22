import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import MateralIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Star from 'react-native-stars';

// const {width, height} = Dimensions.get('window');
export default class itemProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likeStatus: false,
      like: this.props.data.like,
    };
    this.showAlert = this.showAlert.bind(this);
  }
  // UNSAFE_componentWillReceiveProps(nextprops) {
  //   console.log('aaaa');

  //   this.setState({like: nextprops.data.like});
  // }
  showAlert = () => {
    Alert.alert('Hỗ trợ miễn phí vận chuyển');
  };
  handleChange = () => {
    if (this.state.likeStatus === false) {
      this.setState({likeStatus: true, like: this.state.like + 1});
    } else {
      this.setState({likeStatus: false, like: this.state.like - 1});
    }
  };
  render() {
    const {
      image,
      name,
      discount,
      price,
      freeShip,
      star,
      evaluate,
    } = this.props.data;
    return (
      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            style={{width: '100%', height: '100%', borderWidth: 3}}
            source={{uri: image}}
          />
          <View style={styles.textsale}>
            <Text style={{color: '#ff1a1a', fontSize: 11}}>{discount}%</Text>
            <Text style={{fontWeight: 'bold', color: '#ffffff', fontSize: 11}}>
              GIẢM
            </Text>
          </View>
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.price}>
            <View style={styles.flexRow}>
              <Text
                style={{
                  textDecorationLine: 'line-through',
                  color: '#878787',
                  fontSize: 12,
                }}>
                <Text style={{textDecorationLine: 'underline'}}>đ </Text>
                {price}
              </Text>
              <Text
                style={{
                  color: '#ff6600',
                  fontSize: 12,
                }}>
                <Text style={{textDecorationLine: 'underline'}}> đ </Text>
                {(price * (100 - discount)) / 100}
              </Text>
            </View>
            {freeShip === true ? (
              <TouchableOpacity onPress={this.showAlert}>
                <MateralIcons name="truck-fast" color="#58a35c" />
              </TouchableOpacity>
            ) : null}
          </View>
          <View style={styles.price}>
            <View style={styles.flexRow}>
              {this.state.likeStatus === false ? (
                <TouchableOpacity
                  style={{alignSelf: 'center'}}
                  onPress={this.handleChange}>
                  <AntDesign name="hearto" color="#878787" />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={{alignSelf: 'center'}}
                  onPress={this.handleChange}>
                  <AntDesign name="heart" color="red" />
                </TouchableOpacity>
              )}
              <Text
                style={{
                  fontSize: 12,
                  alignSelf: 'center',
                  color: '#878787',
                }}>
                {' '}
                {this.state.like}
              </Text>
            </View>
            <View style={styles.flexRow}>
              <View style={{justifyContent:'center'}}>
                <Star
                  // style={{alignSelf: 'center'}}
                  default={star}
                  count={5}
                  half={true}
                  starSize={25}
                  fullStar={
                    <MateralIcons name="star" style={styles.fullStar} />
                  }
                  halfStar={
                    <MateralIcons name="star-half" style={styles.fullStar} />
                  }
                  emptyStar={
                    <MateralIcons
                      name="star-outline"
                      style={[styles.fullStar]}
                    />
                  }
                />
              </View>
              <Text
                style={{
                  fontSize: 12,
                  alignSelf: 'center',
                  color: '#878787',
                }}>
                ({evaluate})
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: '#ffffff',
  },
  image: {
    flex: 7,
  },
  info: {
    flex: 3,
    margin: 10,
  },
  name: {
    flex: 2,
  },
  price: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
  textsale: {
    width: 40,
    height: 40,
    backgroundColor: '#e8ac05',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  flexRow: {
    flexDirection: 'row',
    // justifyContent: 'center',
  },
  fullStar: {
    alignSelf: 'center',
    color: 'yellow',
    // backgroundColor: ,
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 1,
  },
  emptyStar: {
    color: 'white',
  },
});
