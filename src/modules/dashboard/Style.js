import { Color } from 'common';
import { Dimensions } from 'react-native';
const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);
export default {
  ScrollView: {
    padding: 10
  },
  MainContainer: {
    width: '100%',
    alignItems: 'center'
  },
  TextContainer: {
    flex: 1
  },
  Card: {
    borderRadius: 10,
    width: width - 20,
    marginLeft: 10,
    marginRight: 10,
    textAlign: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: Color.white,
    fontSize: 16,
    fontWeight: 'bold'
  },
  numberText: {
    color: Color.white,
    fontSize: 30
  },
  btn: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 5,
    marginLeft: '5%'
  },
  titleTextSummary: {
    fontSize: 13,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10
  },
  normalText: {
    fontSize: 12,
    color: Color.gray,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10
  },
  headerStyle: {
    backgroundColor: Color.white,
    borderBottomColor: Color.gray,
    borderBottomWidth: 0.5
  },
  topView: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: .3,
  },
  topText: {
    fontWeight: 'bold',
    fontSize: 20
  },
  container: {
    alignItems: 'center',
    height: height * 0.8
  },
  bottomContainer: {
    flexDirection: 'row',
    width: width,
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 5
  },
  numberContainer: {
    width: '20%',
    borderColor: Color.gray,
    borderWidth: 0.6,
    backgroundColor: 'white',
    marginRight: -2,
    padding: 15,
    alignItems: 'center',
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4
  },
  textContainer: {
    width: '80%',
    borderColor: Color.gray,
    borderWidth: 0.6,
    backgroundColor: 'white',
    padding: 15,
    alignItems: 'center',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4
  }
}