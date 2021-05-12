import {Color, BasicStyles} from 'common';
import {Dimensions} from 'react-native';
const width = Math.round(Dimensions.get('window').width);
export default {
  headerStyle: {
    backgroundColor: Color.white,
    borderBottomColor: Color.gray,
    borderBottomWidth: 0.5
  },
  btnWithShadow: {
    height: 50,
    width: width - 100,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: BasicStyles.standardBorderRadius,
    ...BasicStyles.standardShadow,
  }
};
