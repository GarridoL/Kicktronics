import { createStackNavigator } from 'react-navigation-stack';
import Login from 'modules/basics/Login';
import FingerprintScan from '../modules/basics/FingerPrintScanner';
import ForgotPassword from 'modules/basics/rounded/ForgotPassword';
import Register from 'modules/basics/Register';
import Drawer from './Drawer';
import DashboardStack from 'modules/dashboard/DashboardDrawer.js';
import EditProfileStack from 'modules/profile/editProfile/editProfileDrawer.js';
import AddPaymentStack from 'modules/payment/add/AddPaymentDrawer.js';
import TermsAndConditionsStack from 'modules/termsAndConditions/TermsAndConditionsDrawer.js';
import PaymentMethodsStack from 'modules/payment/PaymentMethodsDrawer.js';
import PrivacyStack from 'modules/privacy/Drawer';
import GuidelinesStack from 'modules/guidelines/GuidelinesDrawer';
import LandingPage from 'modules/landing/index.js';
import HomePage from 'modules/homepage/HomeDrawer.js';
import TermsStack from 'modules/terms/drawer.js'


// Landing stack
const LandingPageStack = createStackNavigator(
  {
    loginScreen: { screen: LandingPage },
  },
  {
    headerMode: 'none',
    navigationOptions: {},
  },
);

// HomePage stack
const HomePageStack = createStackNavigator(
  {
    loginScreen: { screen: HomePage },
  },
  {
    headerMode: 'none',
    navigationOptions: {},
  },
);


// login stack
const LoginStack = createStackNavigator(
  {
    loginScreen: { screen: Login },
  },
  {
    headerMode: 'none',
    navigationOptions: {},
  },
);

// FingerPrint stack
const FingerPrintStack = createStackNavigator(
  {
    fingerPrintScreen: { screen: FingerprintScan },
  },
  {
    headerMode: 'none',
    navigationOptions: {},
  },
);

// Forgot Password stack
const ForgotPasswordStack = createStackNavigator(
  {
    forgotPasswordScreen: { screen: ForgotPassword },
  },
  {
    headerMode: 'none',
    navigationOptions: {},
  },
);

// Forgot Password stack
const RegisterStack = createStackNavigator(
  {
    registerScreen: { screen: Register },
  },
  {
    headerMode: 'none',
    navigationOptions: {},
  },
);
// Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    landingPageStack: {screen: LandingPageStack},
    homePageStack: {screen: HomePageStack},
    loginStack: {screen: LoginStack},
    fingerPrintStack: {screen: FingerPrintStack},
    forgotPasswordStack: {screen: ForgotPasswordStack},
    registerStack: {screen: RegisterStack},
    drawerStack: {screen: Drawer},
    dashboardStack: {screen: DashboardStack},
    editProfileStack: {screen: EditProfileStack},
    addPaymentStack: {screen: AddPaymentStack},
    termsAndConditionsStack: {screen: TermsAndConditionsStack},
    paymentMethodsStack: { screen: PaymentMethodsStack },
    privacyStack: { screen: PrivacyStack},
    guidelinesStack: { screen: GuidelinesStack},
    termsStack: { screen: TermsStack},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main Menu',
    initialRouteName: 'landingPageStack',
  },
);

export default PrimaryNav;
