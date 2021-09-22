import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

export default class itemMenu extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.getMenu(this.props.index);
        }}
        style={
          this.props.keyViewPager === this.props.index
            ? styles.selected
            : styles.unselected
        }>
        <View style={{marginHorizontal: 20}}>
          <Text
            style={
              this.props.keyViewPager === this.props.index
                ? styles.textSelected
                : styles.textUnSelected
            }>
            {this.props.text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  selected: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#ff3300',
  },
  unselected: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textSelected: {
    color: '#ff3300',
    fontWeight: 'bold',
    fontSize: 16,
  },
  textUnSelected: {
    fontSize: 16,
  },
});
