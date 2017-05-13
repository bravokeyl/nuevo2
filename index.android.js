import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar
} from 'react-native';

import NuevoApp from './app/index';
import {MyApp} from './app/drawer';

StatusBar.setBackgroundColor('#f5511e'); // #fa5e2b (#fe5722--lighter orange)
AppRegistry.registerComponent('nuevo2', () => NuevoApp);
