import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

const NuevoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f8'
  },
  grid: {
    margin: 16,
  },
  row: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 16,
  },
  circleCon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0,
    borderColor: 'red',
    backgroundColor: 'transparent',
  },
  circle: {
    height: 200,
    width: 200,
    borderWidth: 0,
    borderColor: 'green',
    borderRadius: 100,
    backgroundColor: '#f1636c',//'#f3635c',//'#5c82ed',
    justifyContent: 'center',
    elevation: 8,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  val: {
    fontSize: 40,
    paddingVertical: 10,
  },
  liCon: {
    flex: 1,
    justifyContent: 'center',
  },
  li: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  liText: {
    fontSize: 16,
  }
});

export default NuevoStyles;
