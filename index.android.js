import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar
} from 'react-native';

import NuevoApp from './app/index';

StatusBar.setBackgroundColor('#fa5e2b');
AppRegistry.registerComponent('nuevo2', () => NuevoApp);
