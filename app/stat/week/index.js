import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { FormLabel, FormInput, Button, Icon, Card } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import NuevoFireAuth from '../../firebase';
var user = NuevoFireAuth.currentUser;
import NuevoStyles from './styles';

export default class NuevoStatWeek extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  componentDidMount() {
    console.log("NuevoStatWeek Component did mount");
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
      <ScrollView style={ [NuevoStyles.container] }>
        <View style={ [NuevoStyles.container] }>
          <Card>
            <View style={[NuevoStyles.card]}>
              <View style={[NuevoStyles.left]}>
                <Text style={[NuevoStyles.key]}>
                 Generation
                </Text>
                <Text style={[NuevoStyles.val]}>52,190</Text>
              </View>
              <View style={[NuevoStyles.right]}>
                <Text style={[NuevoStyles.key]}>
                 The idea with React Native Elements is more about component structure than actual design.
                </Text>
              </View>
            </View>
          </Card>
        </View>
      </ScrollView>
    )
  }
}
