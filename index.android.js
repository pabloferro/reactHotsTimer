/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MapListScene from './components/scenes/MapListScene/MapListScene.js';

export default class reactHotsTimer extends Component {
  render() {
    return (
      <MapListScene />
    );
  }
}

AppRegistry.registerComponent('reactHotsTimer', () => reactHotsTimer);
