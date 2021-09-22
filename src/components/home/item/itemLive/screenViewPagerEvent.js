import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import {
    RecyclerListView,
    DataProvider,
    LayoutProvider,
} from 'recyclerlistview';
import ItemListEvent from './itemListEvent'
const ViewTypes = {
    FULL: 0,
    TITLE: 1
};

export default class screenViewPagerEvent extends Component {
    constructor(args) {
        super(args);

        let { width } = Dimensions.get('window');

        this._layoutProvider = new LayoutProvider(
            index => {
                return ViewTypes.FULL;
            },
            (type, dim) => {
                switch (type) {
                    case ViewTypes.FULL:
                        dim.width = width;
                        dim.height = 110;
                        break;
                    default:
                        dim.width = 0;
                        dim.height = 0;
                }
            }
        );

        this._rowRenderer = this._rowRenderer.bind(this);

        this.state = {
            dataProvider: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(
                [""]
            ),
        };
    }

    UNSAFE_componentWillReceiveProps(nextprops) {
        if (this.props !== nextprops && nextprops.data) {
            this.setState({
                dataProvider: new DataProvider((r1, r2) => r1 !== r2).cloneWithRows(
                    nextprops.data,
                ),
            })
        }
    }

    _rowRenderer(type, data) {
        switch (type) {
            case ViewTypes.FULL:
                return (
                    <ItemListEvent {...data} />
                );
            default:
                return null;
        }
    }

    render() {
        return (
            <View style={{ height: "100%", backgroundColor: "#fff2e6" }}>
                <RecyclerListView
                    layoutProvider={this._layoutProvider}
                    dataProvider={this.state.dataProvider}
                    rowRenderer={this._rowRenderer}
                />
            </View>
        );
    }
}
const styles = {
    container: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#00a1f1',
    },
    containerGridLeft: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#ffbb00',
    },
    containerGridRight: {
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#7cbb00',
    },
};
