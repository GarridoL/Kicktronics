import {Color, BasicStyles} from 'common';
import {Dimensions} from 'react-native';
export default {
  headerStyle: {
    backgroundColor: Color.white,
    borderBottomColor: Color.gray,
    borderBottomWidth: 0.5
  },
  cardStyleWithShadow: {
    ...BasicStyles.standardShadow,
    borderRadius: BasicStyles.standardBorderRadius,
    backgroundColor: Color.primary,
    padding: 10
}
};
