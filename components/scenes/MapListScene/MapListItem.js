import React from 'react';
import { View, Text, Image } from 'react-native';

export default function MapListItem(props) {
  return (
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
      <Image
        style={{ width: 108, height: 56 }}
        source={{ uri: props.imageUrl }}
      />
      <Text style={{ flex: 1, paddingLeft: 10 }}>{props.name}</Text>
    </View>
  );
}

MapListItem.propTypes = {
  imageUrl: React.PropTypes.string,
  name: React.PropTypes.string
};
