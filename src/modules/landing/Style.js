import { Color, BasicStyles } from 'common';
import { Dimensions } from 'react-native';
const width = Math.round(Dimensions.get('window').width);
export default {
  ScrollView: {
    padding: 5,
  },
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  LogoContainer: {
    height: 100,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100
  },
  LogoSize: {
    height:150,
    width: 150
  },
  TextContainer: {
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%'
  },
  messageContainer: {
    height: 50,
    width: width - 40,
    alignItems: 'center',
    justifyContent: 'center',
    color: Color.danger
  },
  messageText: {
    color: Color.danger
  },
  textInput: {
    height: 50,
    borderColor: Color.gray,
    borderWidth: 1,
    width: width - 40,
    paddingLeft: 10,
    marginBottom: 20,
    borderRadius: 5
  },
  btnPrimary: {
    height: 50,
    backgroundColor: Color.primary,
    width: width - 40,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  btnText: {
    color: Color.white
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