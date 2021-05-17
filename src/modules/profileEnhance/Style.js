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
  },

  cardWithShadow: {
    height: 50,
    width: width - 100,
    marginBottom: 20,
    alignItems: 'center',
    // justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'white',
    borderRadius: BasicStyles.standardBorderRadius,
    ...BasicStyles.standardShadow,
  },
  TextContainer: {
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    marginTop: '5%'
  },
  

  //modal styles
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
};
