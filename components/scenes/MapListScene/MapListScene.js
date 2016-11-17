import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MapList from './MapList/MapList.js';
import styles from './MapListScene.style';

export default class MapListScene extends Component {
  constructor(props) {
    super(props);
    this.state = { maps: [] };
  }

  componentDidMount() {
    fetch('https://api.hotslogs.com/Public/Data/Maps')
      .then((response) => response.json())
      .then((mapsResponse) => {
        this.setState({ maps: mapsResponse });
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Select a Map</Text>
        <MapList maps={this.state.maps} />
      </View>
    );
  }

}
