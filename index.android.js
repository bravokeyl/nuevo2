import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar
} from 'react-native';

import NuevoApp from './app/index';
import MyApp from './app/drawer';

StatusBar.setBackgroundColor('#fa5e2b');
AppRegistry.registerComponent('nuevo2', () => NuevoApp);
