import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import NuevoFireAuth from '../firebase';
// import RNFirebase from 'react-native-firebase'
var user = NuevoFireAuth.currentUser;
import NuevoStyles from './styles';

export default class NuevoLogin extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.onPressLogin = this.onPressLogin.bind(this);
  }
  componentWillMount() {
    console.log("NuevoLogin Component will mount");
  }
  componentDidMount() {
    console.log("NuevoLogin Component did mount");
    if (user) {
      console.log(user)
      user.providerData.forEach(function (profile) {
        console.log("Sign-in provider: "+profile.providerId);
        console.log("  Provider-specific UID: "+profile.uid);
        console.log("  Name: "+profile.displayName);
        console.log("  Email: "+profile.email);
        console.log("  Photo URL: "+profile.photoURL);
      });
      // this.props.navigation.navigate('Home');
    } else {
      console.log("No User",user)
    }
  }
  onPressLogin(){
    let NuevoNavProps = this.props.navigation;
    console.log("Login button pressed", this.state.email,this.state.password);
    // NuevoNavProps.navigate('Dash');
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Dash'})
      ]
    })
    NuevoNavProps.dispatch(resetAction)
    // NuevoFireAuth.signInWithEmailAndPassword(this.state.email, this.state.password)
    // .then(function(userData){
    //   console.log(userData);
    //   const resetAction = NavigationActions.reset({
    //     index: 0,
    //     actions: [
    //       NavigationActions.navigate({ routeName: 'Dash'})
    //     ]
    //   })
    //   NuevoNavProps.dispatch(resetAction)
    //   // NuevoNavProps.dispatch({
    //   //    type: 'Reset',
    //   //    index: 0,
    //   //   actions: [{ type: 'Navigate', routeName: 'Dash' }]
    //   // });
    //   // NuevoNavProps.navigate('Dash');
    // }).catch(function(error) {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log("Error during login",error);
    // });
  }
  render(){
    return(
      <View style={ [NuevoStyles.container, NuevoStyles.loginBg] }>
        <View style={{position:'absolute',top:0,bottom:0,}}>
          <Image source={require('../assets/m.jpg')} />
        </View>
        <View style={{backgroundColor: 'rgba(233, 111, 66, 0.8)'}}>
          <View style={[NuevoStyles.logo]}>
            <Image source={require('../assets/logo-white-s.png')} />
            <View style={{ marginHorizontal: 32}}>
              <FormLabel labelStyle={NuevoStyles.label}>Username</FormLabel>
              <FormInput onChangeText={(email) => this.setState({email})} selectionColor="#fff" inputStyle={NuevoStyles.input} autoCorrect={false}/>
            </View>
            <View style={{ marginHorizontal: 32}}>
              <FormLabel labelStyle={NuevoStyles.label}>Password</FormLabel>
              <FormInput onChangeText={(password) => this.setState({password})} selectionColor="#fff" inputStyle={NuevoStyles.input} secureTextEntry/>
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
      </View>
    )
  }
}
