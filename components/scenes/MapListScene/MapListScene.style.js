import { StyleSheet } from 'react-native';
import CommonStyle from '../../common/common.style';

export default StyleSheet.create({
  title: {
    ...CommonStyle.primaryFont,
    height: 50,
    fontSize: 25,
    paddingTop: 10,
    textAlign: 'center',
    borderBottomColor: 'rgba(0,0,0,.2)',
    borderBottomWidth: 1
  },
  container: {
    flex: 1,
    backgroundColor: '#1b0756'
  }
});
