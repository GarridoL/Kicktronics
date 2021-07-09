import {Color, BasicStyles} from 'common';
import {Dimensions} from 'react-native';
const width = Math.round(Dimensions.get('window').width);
export default {
  mainContainer: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  iconSize: {
    size: 35,
  },
  cardStyleWithShadow: {
    ...BasicStyles.standardShadow,
    // borderRadius: BasicStyles.standardBorderRadius,
    backgroundColor: Color.primary,
    padding: 10,
    marginBottom: 10,
  },

  circledBorder: {
    height: 80,
    width: 80,
    borderColor: '#eeeeee',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    shadowColor: '#000',
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
    height: 50,
    width: width - 100,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0, 0.8)',
    // borderRadius: BasicStyles.standardBorderRadius,
    ...BasicStyles.standardShadow,
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    // borderRadius: 20,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
