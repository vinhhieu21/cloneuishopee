import React, {Component} from 'react';
import {View, FlatList, StyleSheet, ScrollView} from 'react-native';
import dataMenu from './data/fakeDataMenuBottom';
import ItemMenu from './items/touchMenuBottom';
import ItemContent from './items/itemImages';
import ViewPager from '@react-native-community/viewpager';

export default class screenViewPager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyViewPager: 1,
    };
    this.viewPager = React.createRef();
  }
  getMenu = index => {
    this.viewPager.current.setPage(index - 1);
    this.setState({keyViewPager: index});
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.menu}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={dataMenu}
            // style={styles.menu}
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
        </View>
        <ViewPager
          initialPage={0}
          ref={this.viewPager}
          style={{width: '100%', height: 500}}
          onPageSelected={e =>
            this.setState({keyViewPager: e.nativeEvent.position + 1})
          }>
          <ItemContent key="1" />
          <ItemContent key="2" />
          <ItemContent key="3" />
          <ItemContent key="4" />
          <ItemContent key="5" />
        </ViewPager>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  menu: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    // flex: 1,
    height: 50,
  },
});
