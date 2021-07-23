import { Color, BasicStyles } from 'common';
import { Dimensions } from 'react-native';
const width = Math.round(Dimensions.get('window').width);
export default {
    iconSize: {
        size: 35
    },
    cardStyleWithShadow: {
        ...BasicStyles.standardShadow,
        // borderRadius: BasicStyles.standardBorderRadius,
        backgroundColor: Color.primary,
        padding: 10,
        marginBottom: 10
    },

    circledBorder: {
        height: 80,
        width: 80,
        borderColor: '#eeeeee',
        borderRadius: 50,
        justifyContent:'center',
        alignItems: 'center',
        padding: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.2,
        shadowRadius: 5.46,
        backgroundColor: Color.white,
        elevation: 2,
    },
    btnWithShadow: {
        height: 30,
        width: width - 50,
        // marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: .5,
        // borderColor: 'gray',
        // borderRadius: BasicStyles.standardBorderRadius,
        // ...BasicStyles.standardShadow,
    }
}