import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import NuevoFireAuth from '../firebase';
// import RNFirebase from 'react-native-firebase'
var user = NuevoFireAuth.currentUser;
import NuevoStyles from './styles';

export default class NuevoDash extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  componentDidMount() {
    console.log("NuevoDash Component did mount");
    if (user) {
      console.log(user)
      user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: "+profile.providerId);
        console.log("  Provider-specific UID: "+profile.uid);
        console.log("  Name: "+profile.displayName);
        console.log("  Email: "+profile.email);
        console.log("  Photo URL: "+profile.photoURL);
      });
    } else {
      console.log("No User",user)
    }
  }

  render(){
    return(
      <View style={ [NuevoStyles.container, NuevoStyles.loginBg] }>
        <View style={{position:'absolute',top:0,bottom:0,}}>
          <Image source={require('../assets/m.jpg')} />
        </View>
        <View style={{backgroundColor: 'rgba(233, 111, 66, 0.8)'}}>
          <Text>Hola!</Text>
        </View>
      </View>
    )
  }
}
