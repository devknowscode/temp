/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LoginScreen, RegisterScreen} from '../screens/auth';
import HomeScreen from '../screens/home';
import Screen from '../screens/account';
import SearchScreen from '../screens/search';
import NotificationsScreen from '../screens/notifications';
import OrderScreen from '../screens/order';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import theme from '../styles/theme';

// Screen stack model, makes nested screens easier to visualise
const Screens = {
  Login: LoginScreen,
  Register: RegisterScreen,
  Home: HomeScreen,
  Account: Screen,
  Search: SearchScreen.Finding,
  Notifications: NotificationsScreen,
  Order: OrderScreen,
};

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.grey,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
          marginBottom: 5,
        },
        tabBarStyle: {
          backgroundColor: theme.colors.light,
          height: 60,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Screens.Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => {
            return <Foundation name="home" size={26} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Screens.Account}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon: ({color}) => (
            <FontAwesome name="user-circle-o" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Screens.Search}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color}) => (
            <FontAwesome name="search" size={22} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Screens.Notifications}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({focused, color}) =>
            focused ? (
              <MaterialIcons name="notifications" size={28} color={color} />
            ) : (
              <MaterialIcons
                name="notifications-none"
                size={28}
                color={color}
              />
            ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={Screens.Order}
        options={{
          tabBarLabel: 'Order',
          tabBarIcon: ({color}) => (
            <FontAwesome6 name="box" size={22} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
