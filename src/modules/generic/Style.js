import { Color, BasicStyles } from 'common';
import { Dimensions } from 'react-native';
// const width = Math.round(Dimensions.get('window').width);
export default {
    iconSize: {
        size: 35
    },
    cardStyleWithShadow: {
        ...BasicStyles.standardShadow,
        borderRadius: BasicStyles.standardBorderRadius,
        backgroundColor: Color.primary,
        padding: 10
    }
}