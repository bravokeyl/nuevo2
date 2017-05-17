import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Linking } from 'react-native';
import { FormLabel, FormInput, Button, Icon, Card, Grid, Row } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import NuevoFireAuth from '../firebase';
var user = NuevoFireAuth.currentUser;
import NuevoStyles from './styles';


export default class NuevoPicker extends Component {
  constructor(props){
    super(props);
    this.onPressHandler = this.onPressHandler.bind(this);
  }
  onPressHandler(){
    console.log("Pressed");
    Linking.openURL('https://pyz1xbouqb.execute-api.us-east-1.amazonaws.com/l').catch(err => console.error('An error occurred', err));
  }

  componentDidMount() {
    console.log("NuevoPicker Component did mount");
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
    let data = [
    [{
      "v": 49,
      "name": "Solar"
    }, {
      "v": 85,
      "name": "Grid"
    }],
  ]

  let options = {
    width: 150,
    height: 200,
    margin: {
      top: 20,
      left: 25,
      bottom: 50,
      right: 20
    },
    color: '#fe5722',
    gutter: 20,
    animate: {
      type: 'oneByOne',
      duration: 200,
      fillTransition: 3
    },
    axisX: {
      showAxis: false,
      showLines: false,
      showLabels: true,
      showTicks: true,
      zeroAxis: false,
      orient: 'bottom',
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        fill: '#34495E'
      }
    },
    axisY: {
      showAxis: false,
      showLines: false,
      showLabels: true,
      showTicks: true,
      zeroAxis: false,
      orient: 'left',
      label: {
        fontFamily: 'Arial',
        fontSize: 8,
        fontWeight: true,
        fill: '#34495E'
      }
    }
  }

    return(
      <View style={ [NuevoStyles.container] }>
        <Grid containerStyle={[NuevoStyles.grid]}>
          <Row containerStyle={[NuevoStyles.row]}>
            <Text>ROW</Text>
          </Row>
          <Row containerStyle={[NuevoStyles.row]}>
            <Text>ROW</Text>
          </Row>
        </Grid>
      </View>
    )
  }
}
