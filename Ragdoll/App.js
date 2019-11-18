/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
// import TabNavigator from './app/main/support/TabNavigator';
import Home from './app/main/home/Home'

export default class App extends Component {
  render() {
    return (
        <Home />
    );
  }
}
