import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-elements'

import NuevoStyles from './styles';

export default class NuevoDemo extends Component {
  constructor(props){
    super(props);
    this.onPressLogin = this.onPressLogin.bind(this);
    this.props.screenProps.auth.signOut();
  }
  onPressLogin(){
    console.log("Login button pressed");
    this.props.navigation.navigate('Login');
  }
  componentWillMount() {
    console.log("Demo Component will mount");
    let self = this;
    console.log("Current User",this.props.screenProps.currentUser);
    this.props.screenProps.auth.onAuthStateChanged(function(user) {
      if(user != null) {
        // self.props.navigation.navigate('Dash');
      }
    });
  }
  componentDidMount() {
    console.log("Demo Component did mount");
  }
  render(){
    return(
      <View style={ [NuevoStyles.container, NuevoStyles.loginBg] }>
        {
          <View style={{position:'absolute',top:0,bottom:0}}>
            <Image source={require('../assets/lbg.png')} />
          </View>
        }
        <View>
          <View style={[NuevoStyles.logo]}>
            <Image source={require('../assets/logo-white-s.png')} />
          </View>
          <View style={{flex: 1,}}>
            <View>
              <Button
                title="VIEW DEMO"
                color="#FF5722"
                onPress={this.onPressLogin}
                accessibilityLabel="Login"
                buttonStyle={[NuevoStyles.btn,NuevoStyles.demobtn]}
              />
            </View>
            <View>
              <Text style={NuevoStyles.text}>Already have an account?</Text>
            </View>
            <View>
              <Button
                title="LOG IN"
                color="#fff"
                onPress={this.onPressLogin}
                accessibilityLabel="Login"
                buttonStyle={NuevoStyles.btn}
              />
            </View>
          </View>
        </View>
        <View style={NuevoStyles.footer}>
          <Text style={NuevoStyles.footerText}>By signing in you agree to our</Text>
          <Text style={[NuevoStyles.footerText,{textDecorationLine: 'underline'}]}>Terms of Use</Text>
          <Text style={[NuevoStyles.footerText]}> and </Text>
          <Text style={[NuevoStyles.footerText,{textDecorationLine: 'underline'}]}>Privacy Policy</Text>
        </View>
      </View>
    )
  }
}
