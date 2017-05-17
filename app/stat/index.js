import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { FormLabel, FormInput, Button, Icon, Card, List, ListItem } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import NuevoFireAuth from '../firebase';
var user = NuevoFireAuth.currentUser;
import NuevoStyles from './styles';

let url = 'https://pyz1xbouqb.execute-api.us-east-1.amazonaws.com/l';
//https://pyz1xbouqb.execute-api.us-east-1.amazonaws.com/l

export default class NuevoStat extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }
  getLiveData() {
    console.log("Getting live data");
    return fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          data : responseJson.Items
        });
        return responseJson.Items;
      })
      .catch((error) => {
        console.error(error);
      }).done();
  }
  componentDidMount() {
    console.log("NuevoStat Component did mount");
    this.getLiveData();
    console.info(this.state.data);
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
    console.log("Rendering Day Stat");
    return(
      <ScrollView style={ [NuevoStyles.container] }>
        <View style={ [NuevoStyles.container] }>
          <View style={[NuevoStyles.datcon]}>
              {
                this.state.data.map((l, i) => (
                  <View key={i} style={[NuevoStyles.row]}>
                    <Text>Energy: {l.enac}</Text>
                    <Text>Power: {l.powac}</Text>
                    <Text>Current: {l.crms}</Text>
                    <Text>Voltage: {l.vrms}</Text>
                    <Text>Time: {l.utime}</Text>
                  </View>
                ))
              }
         </View>
        </View>
      </ScrollView>
    )
  }
}
