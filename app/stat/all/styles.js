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
  card: {
    flexDirection: 'row',
    paddingVertical: 16,
  },
  left: {
    paddingLeft: 16,
    paddingRight: 32,
  },
  right: {
    paddingRight: 32,
  },
  key: {
    fontSize: 16,
    marginBottom: 10,
  },
  val: {
    fontSize: 30,
  }
});

export default NuevoStyles;
