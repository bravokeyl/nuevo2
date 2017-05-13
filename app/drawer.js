import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { DrawerNavigator, StackNavigator, NavigationActions } from 'react-navigation';
import NuevoDash from './dash';

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

const dashRoutes = {
  HomeDash: {
    screen: NuevoDash,
    navigationOptions: ({navigation})=>({
      title: 'NuevoHomeDash',
      headerStyle: {
        backgroundColor: '#fe5722',
        paddingHorizontal: 16,
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

export const MyApp = DrawerNavigator({
  Home: {
    screen: NuevoDashStack,
  },
  Notifications: {
    screen: MyNotificationsScreen,
    title: 'NuevoNotif',
  },
},{
  initialRouteName: 'Home'
});
