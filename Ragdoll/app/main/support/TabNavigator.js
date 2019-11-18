import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import Home from '../home/Home';
import Profile from '../profile/Profile';
import Discover from '../discover/Discover';
import Setting from '../profile/Setting';

// const StackNavigator = createStackNavigator(
//   {
//     Home: {
//         screen: Home
//     },
//     Discover: {
//         screen: Discover
//     },
//     Profile: {
//         screen: Profile
//     },
//     Setting: {
//         screen: Setting
//     },
//   },
//   {
//     initialRouteName: 'Home',
//     defaultNavigationOptions: {
//       headerStyle: {},
//       headerBackTitle: null,
//       headerTitleStyle: {
//         fontWeight: 'bold',
//       },
//       header: null
//     }
//   }
// )

// const HomeStack = createStackNavigator({
//     Home: {
//         screen: Home
//     }
// }, {
//     defaultNavigationOptions: {
//         headerStyle: {
//             backgroundColor: '#fff',
//             elevation: 0.5,
//         },
//         headerTitleStyle: {
//             fontSize: 18,
//             textAlign: "center",
//             flex: 1
//         }
//     }
// });

// const DiscoverStack = createStackNavigator({
//     Discover: {
//         screen: Discover
//     }
// }, {
//     defaultNavigationOptions: {
//         headerStyle: {
//             backgroundColor: '#fff',
//             elevation: 0.5,
//         },
//         headerTitleStyle: {
//             fontSize: 18,
//             textAlign: "center",
//             flex: 1
//         }
//     }
// });

// const ProfileStack = createStackNavigator({
//     Profile: {
//         screen: Profile
//     }
// }, {
//     defaultNavigationOptions: {
//         headerStyle: {
//             backgroundColor: '#fff',
//             elevation: 0.5,
//         },
//         headerTitleStyle: {
//             fontSize: 18,
//             textAlign: "center",
//             flex: 1
//         }
//     }
// });


// const BottomTabNavigator = createBottomTabNavigator(
//   {
//     Home: {
//         screen: HomeStack
//     },
//     Discover: {
//         screen: DiscoverStack
//     },
//     Profile: {
//         screen: ProfileStack
//     },
//   },
//   {
//     initialRouteName: 'Home',
//     order: ['Home', 'Discover', 'Profile'],
//     tabBarOptions: {
//       //当前选中的tab bar的文本颜色和图标颜色
//       activeTintColor: '#4BC1D2',
//       //当前未选中的tab bar的文本颜色和图标颜色
//       inactiveTintColor: '#000',
//       //是否显示tab bar的图标，默认是false
//       showIcon: true,
//       //showLabel - 是否显示tab bar的文本，默认是true
//       showLabel: true,
//       //是否将文本转换为大小，默认是true
//       upperCaseLabel: false,
//       //material design中的波纹颜色(仅支持Android >= 5.0)
//       pressColor: '#788493',
//       //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
//       pressOpacity: 0.8,
//       //tab bar的样式
//       style: {
//         backgroundColor: '#fff',
//         paddingBottom: 1,
//         borderTopWidth: 0.2,
//         paddingTop: 1,
//         borderTopColor: '#ccc',
//       },
//       //tab bar的文本样式
//       labelStyle: {
//         fontSize: 11,
//         margin: 1,
//       },
//       //tab 页指示符的样式 (tab页下面的一条线).
//       indicatorStyle: {height: 0},
//     },
//     //tab bar的位置, 可选值： 'top' or 'bottom'
//     tabBarPosition: 'bottom',
//     //是否允许滑动切换tab页
//     swipeEnabled: true,
//     //是否在切换tab页时使用动画
//     animationEnabled: false,
//     //是否懒加载
//     lazy: false,
//     //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
//     backBehavior: 'none',
//   }
// );

const TabNavigator = createStackNavigator({
    // BottomTabNavigator:{
    //     screen: BottomTabNavigator
    // },
    Home: {
        screen: Home
    },
    Discover: {
        screen: Discover
    },
    Profile: {
        screen: Profile
    }
},{
    defaultNavigationOptions:{
        headerStyle:{ //导航栏背景色
            backgroundColor:"#fff",
            elevation:0.5
        },
        headerTitleStyle: { //标题样式
            color: "#424242",
            fontSize: 18,
            textAlign: "center", //用于android 机型标题居中显示
            flex:1,
        },
        headerRight: <View/>,
        headerLeft: <View/>
    }
})

export default createAppContainer(TabNavigator);
