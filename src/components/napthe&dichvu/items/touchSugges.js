import React, {Component} from 'react';
import {StyleSheet, Dimensions, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const {width} = Dimensions.get('window');

export default class touchSugges extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Feather size={25} name={this.props.name} color={this.props.color} />
        <Text style={{marginTop: 20}}>{this.props.text}</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: '#e0e0e0',
    width: width / 4,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
