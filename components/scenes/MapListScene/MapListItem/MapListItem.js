import React from 'react';
import { TouchableNativeFeedback, View, Text, Image } from 'react-native';

import styles from './MapListItem.style';

export default function MapListItem(props) {
  return (
    <TouchableNativeFeedback
      onPress={() => console.log('press')}
      background={TouchableNativeFeedback.Ripple('#009cff')}
    >
      <View style={styles.container}>
        <Image
          style={{ width: 108, height: 56 }}
          source={{ uri: props.imageUrl }}
        />
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

MapListItem.propTypes = {
  imageUrl: React.PropTypes.string,
  name: React.PropTypes.string
};
