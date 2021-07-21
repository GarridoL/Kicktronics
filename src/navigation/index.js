import { createStackNavigator } from 'react-navigation-stack';
import Login from 'modules/basics/firebase/Login';
import FingerprintScan from '../modules/basics/FingerPrintScanner';
import ForgotPassword from 'modules/basics/rounded/ForgotPassword';
import Register from 'modules/basics/firebase/Register';
import Drawer from './Drawer';
import DashboardStack from 'modules/dashboard/DashboardDrawer.js';
// import EditProfileStack from 'modules/profile/editProfile/editProfileDrawer.js';
import AddPaymentStack from 'modules/payment/add/AddPaymentDrawer.js';
import TermsAndConditionsStack from 'modules/termsAndConditions/TermsAndConditionsDrawer.js';
import PaymentMethodsStack from 'modules/payment/PaymentMethodsDrawer.js';
import PrivacyStack from 'modules/privacy/Drawer';
import GuidelinesStack from 'modules/guidelines/GuidelinesDrawer';
import LandingPage from 'modules/landing/index.js';
import HomePage from 'modules/homepage/HomeDrawer.js';
import TermsStack from 'modules/terms/drawer.js'
import EditProfileStack from 'modules/profileEnhance/EditProfileDrawer.js'
import ProfileFormStack from 'modules/profileEnhance/ProfileFormDrawer.js'
import DetailsStack from 'modules/products/DetailsDrawer.js'
import SizesStack from 'modules/products/SizesDrawer.js'
import AvailableSizeStack from 'modules/products/availableSizes/AvailableSizeDrawer.js'
import CreateOfferStack from 'modules/products/availableSizes/OfferDrawer.js'
import CheckoutStack from 'modules/products/checkout/CheckoutDrawer.js'
import Sell from 'modules/products/sell/index.js'
import Report from 'modules/products/reports/index.js'
import PreviewImage from 'modules/products/PreviewImage.js'
import SupportStack from 'modules/helpSupport/indexDrawer.js' 
import PurchaseHistory from 'modules/purchase/Drawer.js'
import Options from 'modules/products/payment/Options.js'
import AddressStack from 'modules/products/payment/AdressDrawer.js'
import AddAddress from 'modules/products/payment/AddAddress.js'
import NoAccount from 'modules/generic/NoAccount.js'
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
    profileFormStack: { screen: ProfileFormStack},
    detailsStack: { screen: DetailsStack},
    sizesStack: { screen: SizesStack},
    availablSizeStack: { screen: AvailableSizeStack},
    createOfferStack: { screen: CreateOfferStack},
    checkoutStack: { screen: CheckoutStack},
    sellStack: { screen: Sell},
    reportStack: { screen: Report},
    previewImageStack: { screen: PreviewImage},
    supportStack: { screen: SupportStack},
    purchaseStack: { screen: PurchaseHistory},
    optionsStack: { screen: Options},
    addressStack: { screen: AddressStack},
    addAddressStack: { screen: AddAddress},
    noAccountStack: { screen: NoAccount},
    // editProfileStack: { screen: TermsStack},
  },
  {
    // Default config for all screens
    headerMode: 'none',
    title: 'Main Menu',
    initialRouteName: 'landingPageStack',
  },
);

export default PrimaryNav;
