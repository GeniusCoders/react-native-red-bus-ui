import React from 'react'
import {createBottomTabNavigator,createAppContainer} from 'react-navigation'
import Home from '../App/Home'
import MyBooking from '../App/MyBooking'
import Help from '../App/Help'
import Account from '../App/Account'
import {colors} from '../Styles/Colors'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const AppNavigator =  createBottomTabNavigator({
   Home : {
       screen : Home,
       navigationOptions : {
        header : null,
        tabBarIcon: ({tintColor}) => (
          <Icon
              name="home"
              size={24}
              style={{ color: tintColor }}
          />
        ),
      }
   },
   MyBooking : {
    screen : MyBooking,
    navigationOptions : {
        header : null,
        tabBarIcon: ({tintColor}) => (
          <Icon
              name="format-list-bulleted"
              size={24}
              style={{ color: tintColor }}
          />
        ),
      }
   },
   Help : {
       screen : Help,
       navigationOptions : {
        header : null,
        tabBarIcon: ({tintColor}) => (
          <Icon
              name="help-circle-outline"
              size={24}
              style={{ color: tintColor }}
          />
        ),
      }
   },
   Account : {
       screen : Account,
       navigationOptions : {
        header : null,
        tabBarIcon: ({tintColor}) => (
          <Icon
              name="account-outline"
              size={24}
              style={{ color: tintColor }}
          />
        ),
      }
   }

}, {
    initialRouteName: 'Home',
    activeColor: colors.primaryColor,
    inactiveColor: 'grey',
    barStyle: { backgroundColor: '#fff' },
  }
) 

export default createAppContainer(AppNavigator)