import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { DrawerNavigator, TabNavigator, StackNavigator, NavigationActions } from 'react-navigation';
import NuevoDash from './dash';
import NuevoStat from './stat';
import NuevoStatWeek from './stat/week';
import NuevoStatMonth from './stat/month';
import NuevoStatAll from './stat/all';
import NuevoPicker from './picker/p';

const statRoutes = {
  DayStat: {
    screen: NuevoStat,
    navigationOptions: ({navigation})=>({
      title: 'Today',
    })
  },
  WeekStat: {
    screen: NuevoStatWeek,
    navigationOptions: ({navigation})=>({
      title: 'Week',
    })
  },
  MonthStat: {
    screen: NuevoStatMonth,
    navigationOptions: ({navigation})=>({
      title: 'Month',
    })
  },
  AllStat: {
    screen: NuevoStatAll,
    navigationOptions: ({navigation})=>({
      title: 'All Time',
    })
  }
}
const NuevoStatTab = TabNavigator(statRoutes,{
  tabBarOptions: {
    style: {
      backgroundColor: '#fe5722',
    },
    indicatorStyle: {
      backgroundColor: '#fff'
    }
  }
});
const dashRoutes = {
  HomeDash: {
    screen: NuevoDash,
    navigationOptions: ({navigation})=>({
      title: 'NuevoHomeDash',
      headerStyle: {
        backgroundColor: '#fe5722',
        paddingHorizontal: 16,
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTitleStyle: {
        color: '#fff'
      },
      headerLeft: (
        <Icon name="menu" size={24} iconStyle={{color:'#fff'}}
        onPress={(et)=>{console.log(navigation);navigation.navigate('DrawerOpen');}}/>
      ),
      headerRight: (<Icon name="more-vert" size={24} iconStyle={{color:'#fff'}} />)
    })
  },
  HomeStat: {
    screen: NuevoStatTab,
    navigationOptions: ({navigation})=>({
      title: 'NuevoStatTab',
      headerStyle: {
        backgroundColor: '#fe5722',
        paddingHorizontal: 16,
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTitleStyle: {
        color: '#fff'
      },
      headerLeft: (<Icon name="menu" size={24} iconStyle={{color:'#fff'}} onPress={(et)=>{console.log(navigation);navigation.navigate('DrawerOpen');}}/>),
      headerRight: (<Icon name="more-vert" size={24} iconStyle={{color:'#fff'}} />)
    })
  }
}
const statstackRoutes = {
  HomeStat: {
    screen: NuevoStatTab,
    navigationOptions: ({navigation})=>({
      title: 'NuevoStatTab',
      headerStyle: {
        backgroundColor: '#fe5722',
        paddingHorizontal: 16,
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTitleStyle: {
        color: '#fff'
      },
      headerLeft: (<Icon name="menu" size={24} iconStyle={{color:'#fff'}} onPress={(et)=>{console.log(navigation);navigation.navigate('DrawerOpen');}}/>),
      headerRight: (<Icon name="more-vert" size={24} iconStyle={{color:'#fff'}} />)
    })
  }
}
const pickerRoutes = {
  PPicker: {
    screen: NuevoPicker,
    navigationOptions: ({navigation})=>({
      title: 'NuevoPicker',
      headerStyle: {
        backgroundColor: '#fe5722',
        paddingHorizontal: 16,
        elevation: 0,
        shadowOpacity: 0,
      },
      headerTitleStyle: {
        color: '#fff'
      },
      headerLeft: (
        <Icon name="menu" size={24} iconStyle={{color:'#fff'}}
        onPress={(et)=>{console.log(navigation);navigation.navigate('DrawerOpen');}}/>
      ),
      headerRight: (<Icon name="more-vert" size={24} iconStyle={{color:'#fff'}} />)
    })
  }
}

const NuevoDashStack = StackNavigator(dashRoutes);
const NuevoStatStack = StackNavigator(statstackRoutes);
const NuevoPickerStack = StackNavigator(pickerRoutes);

export const MyApp = DrawerNavigator({
  Home: {
    screen: NuevoDashStack,
  },
  Picker: {
    screen: NuevoPickerStack
  },
  NuevoStat: {
    screen: NuevoStatStack,
  },
},{
  initialRouteName: 'Picker'
});
