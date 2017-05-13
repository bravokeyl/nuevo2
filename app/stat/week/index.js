import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { FormLabel, FormInput, Button, Icon, Card } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import { Bar } from 'react-native-pathjs-charts'
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
    let data = [
    [{
      "v": 49,
      "name": "apple"
    }, {
      "v": 42,
      "name": "apple"
    }],
    [{
      "v": 69,
      "name": "banana"
    }, {
      "v": 62,
      "name": "banana"
    }],
    [{
      "v": 29,
      "name": "grape"
    }, {
      "v": 15,
      "name": "grape"
    }]
  ]

  let options = {
    width: 300,
    height: 300,
    margin: {
      top: 20,
      left: 25,
      bottom: 50,
      right: 20
    },
    color: '#2980B9',
    gutter: 20,
    animate: {
      type: 'oneByOne',
      duration: 200,
      fillTransition: 3
    },
    axisX: {
      showAxis: true,
      showLines: true,
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
      showAxis: true,
      showLines: true,
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
                <Bar data={data} options={options} accessorKey='v'/>
              </View>
            </View>
          </Card>
        </View>
      </ScrollView>
    )
  }
}
