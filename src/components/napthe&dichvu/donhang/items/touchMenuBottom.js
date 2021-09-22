import React, {Component} from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

export default class touchMenu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{}}>
          <TouchableOpacity
            style={
              this.props.keyViewPager === this.props.index
                ? styles.selected
                : styles.unselected
            }
            onPress={() => {
              this.props.getMenu(this.props.index);
            }}>
            <Text
              style={
                this.props.keyViewPager === this.props.index
                  ? styles.textSelected
                  : styles.textUnSelected
              }>
              {this.props.text}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginLeft: 10,
  },
  selected: {
    height: 35,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ff3300',
  },
  unselected: {
    height: 35,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
  },
  textSelected: {
    marginHorizontal: 20,
    color: '#ff3300',
  },
  textUnSelected: {
    marginHorizontal: 20,
  },
});
