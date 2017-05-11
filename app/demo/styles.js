import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const NuevoStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginBg: {
    backgroundColor: '#FF5722'
  },
  logo: {
    maxWidth: 200,
    width: 180,
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 50
  },
  btn: {
    borderColor: 'rgba(255,255,255,0.5)',
    borderWidth: 1,
    borderRadius: 25,
    // paddingHorizontal: 50,
    width: 160,
    backgroundColor: "transparent",
    marginBottom: 16,
  },
  demobtn: {
    backgroundColor: '#fff',
  },
  text: {
    color: '#fff',
    marginBottom: 16,
    textAlign: 'center'
  },
  footer: {
    paddingHorizontal: 16,
    width: 240,
    position: 'absolute',
    bottom: 0,
    paddingBottom: 20,
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  footerText: {
    textAlign: 'center',
    color: '#fff',
  }
});

export default NuevoStyles;
