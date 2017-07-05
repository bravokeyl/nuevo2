import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { DrawerNavigator, DrawerItems, TabNavigator, StackNavigator, NavigationActions } from 'react-navigation';
import NuevoDash from './dash';
import NuevoStat from './stat';
import NuevoStatWeek from './stat/week';
import NuevoStatMonth from './stat/month';
import NuevoStatAll from './stat/all';
import NuevoPicker from './picker/p';

const NuevoDrawerContentComponent = (props) => (
  <View style={styles.container}>
    <Image source={require('./assets/l.jpg')} style={styles.dbg} >
      <View style={styles.dcon}>
        <Text style={styles.name}>Veera Bhadra</Text>
        <Text style={styles.role}>Product Engineer</Text>
        <Image source={require('./assets/avatar.jpg')} style={styles.avatar}/>
      </View>
    </Image>
    <DrawerItems {...props} style={styles.di}/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    borderWidth: 2,
    borderColor: 'blue',
  },
  dbg: {
    height: 200,
    resizeMode: "cover",
    justifyContent: 'center',
    alignItems: 'center',
  },
  dcon: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'green',
    // marginLeft: -80,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: 'center'
  },
  name: {
    fontSize: 24,
    color: '#fff',
  },
  role: {
    color: '#fff',
  },
  di: {
    flex: 1,
  }
});


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
  initialRouteName: 'Picker',
  contentComponent: NuevoDrawerContentComponent,
  contentOptions: {
    activeTintColor: '#333',
    activeBackgroundColor: 'transparent',
    inactiveTintColor: "#666",
    inactiveBackgroundColor: 'transparent',
    style: {
      marginVertical: 0,
    }
  }

});
