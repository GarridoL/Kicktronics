import AsyncStorage from '@react-native-community/async-storage';
import Data from 'services/Data';
import { Helper, Color } from 'common';
import { Routes } from 'common';
import Api from '../services/api';

const types = {
  LOGOUT: 'LOGOUT',
  LOGIN: 'LOGIN',
  UPDATE_USER: 'UPDATE_USER',
  SET_ACTIVE_HEADER: 'SET_ACTIVE_HEADER',
  SET_MODAL_OPTIONS: 'SET_MODAL_OPTIONS',
  SET_ACTIVE_INDEX: 'SET_ACTIVE_INDEX'
};

export const actions = {
  login: (user, token) => {
    return { type: types.LOGIN, user, token };
  },
  logout() {
    return { type: types.LOGOUT };
  },
  updateUser: (user) => {
    return { type: types.UPDATE_USER, user };
  },
  setUpdateHeader: (active) => {
    return { type: types.SET_ACTIVE_HEADER, active };
  },
  setModalOptions: (show) => {
    return { type: types.SET_MODAL_OPTIONS, show }
  },
  setActiveIndex: (index) => {
    return {type: types.SET_ACTIVE_INDEX, index}
  }
};

const date = new Date()
const initialState = {
  token: null,
  user: null,
  activeHeader: false,
  show: false,
  activeIndex: 0,
  index: 0
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
  const { type, user, token } = action;
  const { active, index } = action
  const { show } = action;
  
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
      return { ...state, user, token };
    case types.UPDATE_USER:
      return {
        ...state,
        user,
      }
    case types.SET_ACTIVE_HEADER:
      return {
        ...state,
        activeHeader: active,
      }
    case types.SET_MODAL_OPTIONS:
      return {
        ...state,
        show
      }
    case types.SET_ACTIVE_INDEX:
      return {
        ...state,
        index
        // activeIndex: index
      }
    default:
      return { ...state, nav: state.nav };
  }
};
export default reducer;
