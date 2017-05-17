import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Linking } from 'react-native';
import { FormLabel, FormInput, Button, Icon, Card, Grid, Row } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import NuevoFireAuth from '../firebase';
var user = NuevoFireAuth.currentUser;
import NuevoStyles from './styles';


export default class NuevoP extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    console.log("NuevoP Component did mount");
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
      <View style={ [NuevoStyles.container] }>
        <Grid containerStyle={[NuevoStyles.grid]}>
          <Row containerStyle={[NuevoStyles.row,{backgroundColor:'transparent'}]}>
            <View style={[NuevoStyles.circleCon]}>
              <View style={[NuevoStyles.circle]}>
                <Text style={[NuevoStyles.text]}>Total units</Text>
                <Text style={[NuevoStyles.text,NuevoStyles.val]}>4,679</Text>
                <Text style={[NuevoStyles.text]}>kWh</Text>
              </View>
            </View>
          </Row>
          <Row containerStyle={[NuevoStyles.row, {padding: 0, elevation: 8,}]}>
            <View style={[NuevoStyles.liCon]}>
              <View style={[NuevoStyles.li]}>
                <Text style={[NuevoStyles.liText]}>Energy</Text>
                <Text style={[NuevoStyles.liText]}>Good</Text>
              </View>
              <View style={[NuevoStyles.li]}>
                <Text style={[NuevoStyles.liText]}>Power</Text>
                <Text style={[NuevoStyles.liText]}>Status</Text>
              </View>
              <View style={[NuevoStyles.li]}>
                <Text style={[NuevoStyles.liText]}>Energy</Text>
                <Text style={[NuevoStyles.liText]}>Average</Text>
              </View>
              <View style={[NuevoStyles.li,{borderBottomWidth: 0}]}>
                <Text style={[NuevoStyles.liText]} >Power</Text>
                <Text style={[NuevoStyles.liText]}>Repair</Text>
              </View>
            </View>
          </Row>
        </Grid>
      </View>
    )
  }
}
