import AsyncStorage from '@react-native-community/async-storage';
import Data from 'services/Data';
import {Helper, Color} from 'common';
import {Routes} from 'common';
import Api from '../services/api';

const types = {
  LOGOUT: 'LOGOUT',
  LOGIN: 'LOGIN',
  UPDATE_USER: 'UPDATE_USER'
};

export const actions = {
  login: (user, token) => {
    return {type: types.LOGIN, user, token};
  },
  logout() {
    return {type: types.LOGOUT};
  },
  updateUser: (user) => {
    return {type: types.UPDATE_USER, user};
  }
};

const date = new Date()
const initialState = {
  token: null,
  user: null
};

storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(`${Helper.APP_NAME}${key}`, value);
  } catch (e) {
    // saving error
  }
};

// removeData = async (item) => {
//   try{
//     await AsyncStorage.removeItem(item)
//   }catch (e){

//   }
// }

const reducer = (state = initialState, action) => {
  const {type, user, token} = action;
  switch (type) {
    case types.LOGOUT:
      // storeData('token', '');
      AsyncStorage.clear()
      console.log("[LOGOUT]");
      return Object.assign({}, initialState);
    case types.LOGIN:
      storeData('token', token);
      console.log('LOGIN', true);
      Data.setToken(token);
      return {...state, user, token};
    case types.UPDATE_USER:
      return {
        ...state,
        user,
      }
    default:
      return {...state, nav: state.nav};
  }
};
export default reducer;
