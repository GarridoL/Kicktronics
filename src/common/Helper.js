import Color from './Color.js';
import {
  faEdit,
  faComments,
  faCheck,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { faMoneyBillWaveAlt, faCog, faHome, faEnvelope, faUsers, faPalette, faShieldAlt, faHandshake, faTachometerAlt, faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
export default {
  company: null,
  APP_NAME: '@Kicktronics_',
  APP_NAME_BASIC: 'Kicktronics',
  APP_EMAIL: 'support@kicktronics.com',
  APP_WEBSITE: 'www.kicktronics.com',
  APP_HOST: 'com.kicktronics',
  DrawerMenu: [
    {
      title: 'Dashboard',
      route: 'Dashboard',
      icon: faTachometerAlt
    }
  ],
  pusher: {
    broadcast_type: 'pusher',
    channel: 'payhiram',
    notifications: 'App\\Events\\Notifications',
    messages: 'App\\Events\\Message',
    messageGroup: 'App\\Events\\MessageGroup',
    systemNotification: 'App\\Events\\SystemNotification',
    typing: 'typing',
  },
  tutorials: [
    {
      key: 1,
      title: 'Welcome to PayHiram!',
      text:
        'Sending cash in a new and convenient way! In Payhiram, we have partners to fulfill your cash needed in any locations you want. Start sending today!',
      icon: null,
      image: require('assets/logo.png'),
      colors: [Color.primary, Color.lightGray],
    },
    {
      key: 2,
      title: 'First, create  or post a request',
      text:
        'To post a request, click the + button at the bottom of requests page.',
      icon: faEdit,
      image: null,
      colors: [Color.primary, Color.lightGray],
    },
    {
      key: 3,
      title: 'Second, use the messenger thread',
      text:
        'Once a different user will connect to your request, a messenger thread notification will pop-up. Click the thread notification to contact with your peer using the messenger. You can ask for the ID, Photo, and Signature (only on mobile app) for confirmation of completion to your request',
      icon: faComments,
      image: null,
      colors: [Color.primary, Color.lightGray],
    },
    {
      key: 4,
      title: 'Lastly, transfer of funds and review',
      text:
        'If your request has been completed, other peer will transfer the funds. You can rate your peer and review transaction.',
      icon: faPaperPlane,
      image: null,
      colors: [Color.primary, Color.lightGray],
    },
    {
      key: 5,
      title: 'Congratulations!',
      text: 'You are good to go! Enjoy your stay!',
      icon: faCheck,
      image: null,
      colors: [Color.primary, Color.lightGray],
    },
  ],
  ecommerce: {
    inventoryType: 'inventory',
  },
  validateEmail(email) {
    let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+.[a-zA-Z0-9]*$/;
    if (reg.test(email) === false) {
      return false;
    } else {
      return true;
    }
  },
};
