import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const NuevoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f8'
  },
  loginBg: {
    backgroundColor: 'rgba(233, 111, 66, 0.98)',
  },
  logo: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 50,
    // borderWidth: 1,
  },
  btn: {
    borderColor: 'rgba(233, 111, 66, 0.98)',
    borderWidth: 1,
    borderRadius: 25,
    // paddingHorizontal: 50,
    width: 160,
    backgroundColor: "#FF5722",
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
  label: {
    color: '#fff'
  },
  input: {
    width: 200,
    color: '#fff',
  },
  datcon: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginVertical: 16,
  },
  row: {
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginVertical: 5,
    paddingHorizontal: 16,
    paddingBottom: 5,
  }
});

export default NuevoStyles;
