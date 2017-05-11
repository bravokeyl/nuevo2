import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { NuevoStack } from './routes';
import { NavigationActions } from 'react-navigation';
import NuevoFireAuth from './firebase';

const auth = {
  auth: NuevoFireAuth
};
export default class NuevoApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: true
    }
  }
  componentWillMount() {
    console.log("App Component will mount");
    let self = this;
    NuevoFireAuth.onAuthStateChanged(function(user) {
      console.info("onAuthStateChanged");
      if ( user != null ) {
        NavigationActions.navigate({ routeName: 'Dash' })
        console.info("User",user.email)
      } else {
        console.log("Not an User",user)
      }
    });
    // this.routeOnAuth();
  }
  componentDidMount() {
    console.log("App Component did mount");
    // this.routeOnAuth();
  }

  routeOnAuth() {
    console.log("routeOnAuth");
    // const navigateTo = (routeName) => {
    //   const actionToDispatch = NavigationActions.reset({
    //     index: 0,
    //     actions: [NavigationActions.navigate({ routeName })],
    //   });
    //   this.navigator.dispatch(actionToDispatch);
    // };

    // if (this.props.loggedIn) {
    //   navigateTo('MainScreen');
    // } else {
    //   navigateTo('AuthScreen');
    // }
  }

  render(){
    return(
      <NuevoStack screenProps={auth} />
    )
  }
}
