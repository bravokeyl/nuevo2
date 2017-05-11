import * as firebase from 'firebase';
// import RNFirebase from 'react-native-firebase'
const config = {
  apiKey: "AIzaSyChkhG-yG8V1YQhIJuyCYbQ7u10-QHgBl8",
  authDomain: "nuevomonit.firebaseapp.com",
  databaseURL: "https://nuevomonit.firebaseio.com",
  projectId: "nuevomonit",
  storageBucket: "nuevomonit.appspot.com",
  messagingSenderId: "177534084474"
};
const NuevoFire = firebase.initializeApp(config);
// const NuevoFire = RNFirebase.initializeApp({debug: true});
export default NuevoFireAuth = NuevoFire.auth();
