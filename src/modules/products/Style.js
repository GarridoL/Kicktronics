import { Color, BasicStyles } from 'common';
import { Dimensions } from 'react-native';
const width = Math.round(Dimensions.get('window').width);
export default {
    iconSize: {
        size: 35
    },
    cardStyleWithShadow: {
        ...BasicStyles.standardShadow,
        borderRadius: BasicStyles.standardBorderRadius,
        backgroundColor: Color.primary,
        padding: 10,
        marginBottom: 10
    },

    circledBorder: {
        height: 80,
        width: 80,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 50,
        justifyContent:'center',
        alignItems: 'center',
        padding: 5
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
}