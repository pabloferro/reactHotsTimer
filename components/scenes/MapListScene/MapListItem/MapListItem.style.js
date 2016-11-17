import { StyleSheet } from 'react-native';

import CommonStyle from '../../../common/common.style';

export default StyleSheet.create({
  text: {
    ...CommonStyle.primaryFont,
    paddingLeft: 10
  },
  container: {
    ...CommonStyle.container,
    backgroundColor: '#1b0756'
  }
});
