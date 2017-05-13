import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { DrawerNavigator, TabNavigator, StackNavigator, NavigationActions } from 'react-navigation';
import NuevoDash from './dash';
import NuevoStat from './stat';
import NuevoStatWeek from './stat/week';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Hola!',
    drawerLabel: 'Homew',
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" size={25}/>
    ),
  };

  render() {
    return (
      <View>
        <View>
          <Icon name="menu" size={24} />
        </View>
        <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
        />
        <Button
          color="green"
          style={{marginVertical:20}}
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Open Drawer"
        />
      </View>
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Icon name="cached" size={25} />
    ),
  };

  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
        <Button
          color="green"
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Open Drawer"
        />
      </View>
    );
  }
}
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
    screen: NuevoStat,
    navigationOptions: ({navigation})=>({
      title: 'Month',
    })
  },
  AllStat: {
    screen: NuevoStat,
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

const NuevoDashStack = StackNavigator(dashRoutes);
const NuevoStatStack = StackNavigator(statstackRoutes);


export const MyApp = DrawerNavigator({
  Home: {
    screen: NuevoDashStack,
  },
  Notifications: {
    screen: MyNotificationsScreen
  },
  NuevoStat: {
    screen: NuevoStatStack,
  },
},{
  initialRouteName: 'NuevoStat'
});
