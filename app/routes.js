import React from 'react';
import { TabNavigator, StackNavigator, DrawerNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import NuevoDemo from './demo';
import NuevoLogin from './login';
import NuevoDash from './dash';
import {MyApp} from './drawer';

const stackRoutes = {
  Demo: {
    screen: NuevoDemo,
    navigationOptions: {
      title: 'NuevoDemo',
      header: null
    }
  },
  Login: {
    screen: NuevoLogin,
    navigationOptions: {
      title: 'NuevoLogin',
      header: null
    }
  },
  Dash: {
    screen: MyApp,
    navigationOptions: {
      title: 'NuevoDash',
      header: null
    }
  }
};

export const NuevoStack =  StackNavigator(stackRoutes);
