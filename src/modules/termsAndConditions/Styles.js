
import { Dimensions } from 'react-native'
const height = Math.round(Dimensions.get('window').height);
const width = Math.round(Dimensions.get('window').height);
export default {
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  }
}