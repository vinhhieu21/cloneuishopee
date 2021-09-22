import React, {Component} from 'react';
import {RecyclerListView, LayoutProvider, DataProvider} from 'recyclerlistview';
import dataProduct from '../data/fakeData';
import {Dimensions, Text, View} from 'react-native';
import ItemProduct from './itemProduct';

const ViewTypes = {
  HALF_LEFT: 0,
  HALF_RIGHT: 1,
};

export default class listProduct extends Component {
  constructor(props) {
    super(props);
    let {width} = Dimensions.get('window');
    this.state = {
      dataProvider: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(
        dataProduct,
      ),
    };
    this._layoutProvider = new LayoutProvider(
      i => {
        if (i % 2 === 0) {
          return ViewTypes.HALF_LEFT;
        } else {
          return ViewTypes.HALF_RIGHT;
        }
      },
      (type, dim) => {
        switch (type) {
          case ViewTypes.HALF_LEFT:
            dim.width = width / 2 - 0.0001;
            dim.height = 300;
            break;
          case ViewTypes.HALF_RIGHT:
            dim.width = width / 2;
            dim.height = 300;
            break;
          default:
            dim.width = 0;
            dim.height = 0;
        }
      },
    );
    this._rowRenderer = this._rowRenderer.bind(this);
    this._renderFooter = this._renderFooter.bind(this);
  }
  _rowRenderer(type, data) {
    switch (type) {
      case ViewTypes.HALF_LEFT:
        return <ItemProduct data={data} />;
      case ViewTypes.HALF_RIGHT:
        return <ItemProduct data={data} />;
      default:
        return <View />;
    }
  }
  _renderFooter() {
    return (
      <Text style={{alignSelf: 'center', color: 'red', marginVertical: 20}}>
        Không có sản phẩm nào khác
      </Text>
    );
  }
  render() {
    return (
      <RecyclerListView
        layoutProvider={this._layoutProvider}
        dataProvider={this.state.dataProvider}
        rowRenderer={this._rowRenderer}
        renderFooter={this._renderFooter}
      />
    );
  }
}
