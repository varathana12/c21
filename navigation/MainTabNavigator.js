import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import AboutScreen from '../screens/AboutScreen'
import ListScreen from '../screens/ListScreen'
import PhotoScreen from "../screens/PhotoScreen";
import MapScreen from "../screens/MapScreen";
import CameraScreen from "../screens/CameraScreen";

const MapStack = createStackNavigator({
  Home: MapScreen

},{ headerMode: 'none' });

MapStack.navigationOptions = {
  tabBarLabel: 'Map',
    header: {
        visible: false
    },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-pin${focused ? '' : '-outline'}`
          : 'md-pin'
      }
    />
  ),
};

const CameraStack = createStackNavigator({
  Links: CameraScreen,
});

CameraStack.navigationOptions = {
  tabBarLabel: 'Camera',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-camera${focused ? '' : '-outline'}` : 'md-camera'}
    />
  ),
};

const PhotoStack = createStackNavigator({
  Settings: PhotoScreen,
});

PhotoStack.navigationOptions = {
  tabBarLabel: 'Photo',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-images${focused ? '' : '-outline'}` : 'md-images'}
    />
  ),
};

const ListStack = createStackNavigator({
    Settings: ListScreen,
});

ListStack.navigationOptions = {
    tabBarLabel: 'List',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-list${focused ? '' : '-outline'}` : 'md-list'}
        />
    ),
};


const AboutStack = createStackNavigator({
    Settings: AboutScreen,
});

AboutStack.navigationOptions = {
    tabBarLabel: 'About',
    tabBarIcon: ({ focused }) => (
        <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? `ios-alert${focused ? '' : '-outline'}` : 'md-alert'}
        />
    ),
};

export default createBottomTabNavigator({
    MapStack,
    CameraStack,
    PhotoStack,
    ListStack,
    AboutStack
});
