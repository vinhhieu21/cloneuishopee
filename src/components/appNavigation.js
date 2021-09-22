import {Navigation} from 'react-native-navigation';
import Suggestion from './home/suggestion';
import ShopFeed from './home/feed';
import ShopLive from './home/live';
import Notification from './home/notification';
import UserInfo from './home/userinfo';
import SearchScreen from './search/index';
import ChaoMungScreen from './chaomung/index';
import CartScreen from './cart/index';
import SuuTapScreen from './bosuutap/index';
import FlashSaleScreen from './flashsale/index';
import ShopeeMallScreen from '../components/shopeemall/index';
import {Provider} from 'react-redux';
import {store} from '../redux/store';
import DonMuaScreen from './donmua/index';
import ScreenComment from './home/item/itemFeed/screenComment';
import SearchDHScreen from './donmua/items/itemSearch';
import NapTheScreen from './napthe&dichvu/index';
import DonHangScreen from './napthe&dichvu/donhang/index';
import LuotThichScreen from './luotthich/index';
import MoiXemScreen from './moixem/index';
import DanhMucScreen from './danhmuc/index';

Navigation.registerComponentWithRedux(
  'Suggestion',
  () => Suggestion,
  Provider,
  store,
);
Navigation.registerComponentWithRedux(
  'ShopFeed',
  () => ShopFeed,
  Provider,
  store,
);
Navigation.registerComponentWithRedux(
  'ShopLive',
  () => ShopLive,
  Provider,
  store,
);
Navigation.registerComponentWithRedux(
  'Notification',
  () => Notification,
  Provider,
  store,
);
Navigation.registerComponent('UserInfo', () => UserInfo);
Navigation.registerComponent('SearchScreen', () => SearchScreen);
Navigation.registerComponentWithRedux(
  'ChaoMungScreen',
  () => ChaoMungScreen,
  Provider,
  store,
);
Navigation.registerComponentWithRedux(
  'CartScreen',
  () => CartScreen,
  Provider,
  store,
);
Navigation.registerComponent('SuuTapScreen', () => SuuTapScreen);
Navigation.registerComponent('FlashSaleScreen', () => FlashSaleScreen);
Navigation.registerComponent('ShopeeMallScreen', () => ShopeeMallScreen);
Navigation.registerComponent('DonMuaScreen', () => DonMuaScreen);
Navigation.registerComponentWithRedux(
  'ScreenComment',
  () => ScreenComment,
  Provider,
  store,
);
Navigation.registerComponent('SearchDHScreen', () => SearchDHScreen);
Navigation.registerComponent('NapTheScreen', () => NapTheScreen);
Navigation.registerComponent('DonHangScreen', () => DonHangScreen);
Navigation.registerComponent('LuotThichScreen', () => LuotThichScreen);
Navigation.registerComponent('MoiXemScreen', () => MoiXemScreen);
Navigation.registerComponent('DanhMucScreen', () => DanhMucScreen);

const rootHome = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Suggestion',
                },
              },
            ],
            options: {
              bottomTab: {
                text: 'Home',
                testID: 'SUGGESTION_TAB_BAR_BUTTON',
                selectedTextColor: 'red',
                //icon: require("../../assets/icon/suggest.jpg")
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'ShopFeed',
                },
              },
            ],
            options: {
              bottomTab: {
                text: 'Shopee Feed',
                testID: 'SHOPFEED_TAB_BAR_BUTTON',
                selectedTextColor: 'red',
                //icon: require("../../assets/icon/suggest.jpg")
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'ShopLive',
                },
              },
            ],
            options: {
              bottomTab: {
                text: 'Shopee Live',
                testID: 'SHOPLIVE_TAB_BAR_BUTTON',
                selectedTextColor: 'red',
                //icon: require("../../assets/icon/suggest.jpg")
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'Notification',
                },
              },
            ],
            options: {
              bottomTab: {
                text: 'Thông báo',
                testID: 'NOTIFICATION_TAB_BAR_BUTTON',
                selectedTextColor: 'red',
                //icon: require("../../assets/icon/suggest.jpg")
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'UserInfo',
                },
              },
            ],
            options: {
              bottomTab: {
                text: 'Tôi',
                testID: 'USERINFO_TAB_BAR_BUTTON',
                selectedTextColor: 'red',
                //icon: require("../../assets/icon/suggest.jpg")
              },
            },
          },
        },
      ],
    },
  },
};

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(rootHome);
});
