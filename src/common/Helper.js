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
  options: [
    {
      title: 'Shipping Address',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack'
    },
    {
      title: 'Payment Method',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack'
    },
    {
      title: 'Payout Info',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack'
    },
    {
      title: 'Terms and Condition',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack'
    },
    {
      title: 'Privacy Policy',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack'
    },
    {
      title: 'Shipping Method',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack'
    },
    {
      title: 'Return Policy',
      arrowRight: true,
      color: null,
      route: 'returnPolicyStack'
    },
    {
      title: 'About',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack'
    },
    {
      title: 'Logout',
      arrowRight: false,
      color: Color.danger
    }
  ],
  termsAndConditions: [
    {
      title: 'PROPRIETARY RIGHTS NOTICES',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack',
      description: 'All trademarks, service marks, logos, trade names and any other proprietary designations of Kicktronics used herein are trademarks or registered trademarks of Kicktronics. Any other trademarks, service marks, logos, trade names and any other proprietary designations are the trademarks or registered trademarks of their respective parties.'
    },
    {
      title: 'REGISTERED USER CONTENT',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack',
      description: 'Registered Users may post, upload, publish, submit or transmit Registered User Content. By making available any Registered User Content through the Site, Application or Services, you hereby grant to Kicktronics and its users a worldwide, irrevocable, perpetual, non-exclusive, transferable, royalty-free license, with the right to sublicense, to use, copy, adapt, modify, distribute, license, sell, transfer, publicly display, publicly perform, transmit, and otherwise exploit such Registered User Content. Kicktronics does not claim any ownership rights in any such Registered User Content and nothing in these Terms will be deemed to restrict any rights that you may have to use and exploit any such Registered User Content. You acknowledge and agree that you are solely responsible for all Registered User Content that you make available through the Site, Application or Services.'
    },
    {
      title: 'FEES',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack',
      description: 'Registering for the Service is free, however, Kicktronics charges certain fees based on various transactions on the Service. Unless otherwise stated, all fees are in U.S. Dollars and are outlined in the Fees Policy. We reserve the right to change, or discontinue, temporarily or permanently, some or all of the fees for the Service. Fees may vary and change over time based on your seller rating. Changes are published to the Site and Application and are effective after (14) days notice is given. The Company reserves the right to temporarily change the fees for promotional events. Such changes are effective once the temporary promotional event is posted to the Site or Application.'
    },
    {
      title: 'DISCLAIMERS',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack',
      description: 'THE SITE, SERVICES AND COLLECTIVE CONTENT ARE PROVIDED “AS IS” AND ‘AS AVAILABLE”, WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED. WITHOUT LIMITING THE FOREGOING, Kicktronics EXPLICITLY DISCLAIMS ANY WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, QUIET ENJOYMENT OR NON-INFRINGEMENT, AND ANY WARRANTIES ARISING OUT OF COURSE OF DEALING OR USAGE OF TRADE. Kicktronics MAKES NO WARRANTY THAT THE SITE, SERVICES OR COLLECTIVE CONTENT WILL MEET YOUR REQUIREMENTS OR BE AVAILABLE ON AN UNINTERRUPTED, SECURE, OR ERROR-FREE BASIS. Kicktronics MAKES NO WARRANTY REGARDING THE QUALITY OF ANY SERVICES, COLLECTIVE CONTENT OR ANYTHING ELSE PURCHASED OR OBTAINED THROUGH THE Site, Application or Services OR THE ACCURACY, TIMELINESS, TRUTHFULNESS, COMPLETENESS OR RELIABILITY OF ANY COLLECTIVE CONTENT OBTAINED THROUGH THE Site, Application or Services.'
    },
    {
      title: 'FEEDBACK',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack',
      description: "We welcome and encourage you to provide feedback, comments and suggestions for improvements to the Site, Application or Services ('Feedback'). You may submit Feedback by using the “chat” function within the application for live converstion or by making a “ticket” within the application. You acknowledge and agree that all Feedback will be the sole and exclusive property of Kicktronics and you hereby irrevocably assign to Kicktronics and agree to irrevocably assign to Kicktronics all of your right, title, and interest in and to all Feedback, including without limitation all worldwide patent rights, copyright rights, trade secret rights, and other proprietary or intellectual property rights therein. At Kicktronics's request and expense, you will execute documents and take such further acts as Kicktronics may reasonably request to assist Kicktronics to acquire, perfect, and maintain its intellectual property rights and other legal protections for the Feedback."
    },
    {
      title: 'LIMITATION OF LIABILITY',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack',
      description: "Kicktronics is a platform for Buyers and Sellers to transact on with each other. While Kicktronics may help facilitate resolution of disputes, and may provide guarantees stated in the Kicktronics Return Policy or Kicktronics Authenticity Guarantee Policy, we do not guarantee the existence, quality, safety or legality of the items advertised; the truth or accuracy of users' listings; the ability of Sellers to sell items; the ability of Buyers to pay for items; that a Buyer or Seller will actually complete a transaction or return an item; the legal transfer of item from the Seller to the Buyer; or that a buyer or seller will actually complete a transaction. YOU ACKNOWLEDGE AND AGREE THAT, TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE ENTIRE RISK ARISING OUT OF YOUR ACCESS TO AND USE OF THE SITE, SERVICES AND COLLECTIVE CONTENT REMAINS WITH YOU."
    },
    {
      title: 'PRIVACY',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack',
      description: "See Kicktronics's Privacy Policy at www.Kicktronics.com/privacy for information and notices concerning Kicktronics's collection and use of your personal information."
    },
    {
      title: 'DISPUTE RESOLUTION',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack',
      description: "You and Kicktronics agree that any dispute, claim or controversy arising out of or relating to these Terms or the breach, termination, enforcement, interpretation or validity thereof or the use of the Site, Application or Services (collectively, “Disputes”) will be settled by binding arbitration, except that each party retains the right to bring an individual action in small claims court and the right to seek injunctive or other equitable relief in a court of competent jurisdiction to prevent the actual or threatened infringement, misappropriation or violation of a party's copyrights, trademarks, trade secrets, patents or other intellectual property rights. You acknowledge and agree that you and Kicktronics are each waiving the right to a trial by jury or to participate as a plaintiff or class member in any purported class action or representative proceeding. Further, unless both you and Kicktronics otherwise agree in writing, the arbitrator may not consolidate more than one person's claims, and may not otherwise preside over any form of any class or representative proceeding. If this specific paragraph is held unenforceable, then the entirety of this “Dispute Resolution” section will be deemed void. Except as provided in the preceding sentence, this “Dispute Resolution” section will survive any termination of these Terms."
    },
    {
      title: 'NOTICES',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack',
      description: "Any notices or other communications permitted or required hereunder, including those regarding modifications to these Terms, will be in writing and given by Kicktronics: (i) via email (in each case to the address that you provide) or (ii) by posting to the Site. For notices made by e-mail, the date of receipt will be deemed the date on which such notice is transmitted."
    },
    {
      title: 'LINKS',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack',
      description: "The Site may contain links to third-party websites or resources. You acknowledge and agree that Kicktronics is not responsible or liable for: (i) the availability or accuracy of such websites or resources; or (ii) the text, products, or services on or available from such websites or resources. Links to such websites or resources do not imply any endorsement by Kicktronics of such websites or resources or the text, products, or services available from such websites or resources. You acknowledge sole responsibility for and assume all risk arising from your use of any such websites or resources."
    },
    {
      title: 'GENERAL',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack',
      description: "The failure of Kicktronics to enforce any right or provision of these Terms will not constitute a waiver of future enforcement of that right or provision. The waiver of any such right or provision will be effective only if in writing and signed by a duly authorized representative of Kicktronics. Except as expressly set forth in these Terms, the exercise by either party of any of its remedies under these Terms will be without prejudice to its other remedies under these Terms or otherwise. If for any reason a court of competent jurisdiction finds any provision of these Terms invalid or unenforceable, that provision will be enforced to the maximum extent permissible and the other provisions of these Terms will remain in full force and effect. If you have any questions regarding our legal policies, please email us: help@Kicktronics.com"
    },
    {
      title: 'PAYMENT GATEWAY',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack',
      description: "Kicktronics uses Braintree payment systems, , the most secure payment processing companies. Braintree is a division of PayPal, Inc. (Braintree) for payment processing services. By using the the Braintree payment processing services you agree to the Braintree Payment Services Agreement available at https://www.braintreepayments.com/legal/gateway-agreement, and the applicable bank agreement available at https://www.braintreepayments.com/legal/cea-wells. If you have questions regarding the MSA, please contact Braintree at 877.434.2894."
    },
    {
      title: 'OWNERSHIP',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack',
      description: "The Site, Services and Collective Content are protected by copyright, trademark, and other laws of the United States and foreign countries. Except as expressly provided in these Terms, Kicktronics and its licensors exclusively own all right, title and interest in and to the Site, Services and Collective Content, including all associated intellectual property rights. You will not remove, alter or obscure any copyright, trademark, service mark or other proprietary rights notices incorporated in or accompanying the Site, Services or Collective Content."
    },
    {
      title: 'ENTIRE AGREEMENT',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack',
      description: "These Terms constitute the entire and exclusive understanding and agreement between Kicktronics and you regarding the Site, Services and Collective Content, and these Terms supersede and replace any and all prior oral or written understandings or agreements between Kicktronics and you regarding the Site, Services and Collective Content."
    },
    {
      title: 'ELIGIBILITY',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack',
      description: "The Site, Application or Services are intended solely for persons who are 13 years of age or older. Any access to or use of the Site, Application or Services by anyone under 13 years of age is expressly prohibited. By accessing or using the Site, Application or Services you represent and warrant that you are 13 years of age or older."
    },
    {
      title: 'COPYRIGHT AND IP POLICY',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack',
      description: "Kicktronics respects copyright law and expects its users to do the same. Kicktronics has adopted and implemented a policy that provides for the termination in appropriate circumstances of Registered Users or other account holders who repeatedly infringe or are believed to be repeatedly infringing the rights of copyright holders. Please see 's Copyright and IP Policy at www..com/copyright, for further information."
    },
    {
      title: 'ASSIGNMENT',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack',
      description: "You may not assign or transfer these Terms, by operation of law or otherwise, without Kicktronics's prior written consent. Any attempt by you to assign or transfer these Terms, without such consent, will be null and of no effect. Kicktronics may assign or transfer these Terms, at its sole discretion, without restriction. Subject to the foregoing, these Terms will bind and inure to the benefit of the parties, their successors and permitted assigns."
    },
    {
      title: 'TERMS OF USE',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack',
      description: "Dream Kicks LLC (“Kicktronics” or “we”) provides a mobile marketplace for buying and selling new and used items (the “Services”) through our websites (“Site”), accessible at “https://www.Kicktronics.com” and our mobile applications (“Application”). Through our Site, Application and Services, users can list items for sale by taking and uploading photos, entering a sale price, as well as the size and condition of the item (“Sellers”). Users can also browse listings by Sellers and can choose to purchase the described item by entering in their payment and billing information (“Buyers”).Please read carefully the following terms and conditions (“Terms”) and our Privacy Policy, which may be found at www.Kicktronics.com/privacy and which is incorporated herein by reference into these Terms. These Terms govern your access to and use of the Site, Application and the Services and, except as otherwise provided in these Terms, all Collective Content (defined below), and constitute a binding legal agreement between you and Kicktronics."
    },
    {
      title: 'TERMINATION AND ACCOUNT CANCELLATION',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack',
      description: "If you breach any of these Terms, Kicktronics will have the right to suspend or disable your Account or terminate these Terms, at its sole discretion and without prior notice to you. Kicktronics reserves the right to revoke your access to and use of the Site, Services and Collective Content at any time, with or without cause. When you register to join the Site and create a profile page, you are free to choose any name to identify yourself to other Registered Users. However, any complaints to Kicktronics by Registered Users, arising out of or in connection with your use of a false name, may result, in Kicktronics's sole discretion and without prior notice to you, in the suspension or disabling of your Account or the termination of these Terms. In the event Kicktronics terminates these Terms for your breach, or revokes your access to and use of the Site, Application or Services or terminates or discontinues the Site, Application or Services and consequently these Terms, you will remain liable for all amounts due hereunder. You may cancel your Account at any time by sending an email to help@Kicktronics.com."
    },
    {
      title: 'LISTING AND SALES',
      arrowRight: true,
      color: null,
      route: 'termsAndConditionsStack',
      description: "All sales are final. Make sure to enter your full and proper shipping address and shoe size. If your address changes, it is your responsibility to update your account. Should an item received by Kicktronics from a seller be found to be inauthentic or lacking in quality described, the item may be returned by Kicktronics to the original seller. The seller will be charged a non-refundable return fee of $30 plus shipping costs for each return. Sellers may have their account with Kicktronics terminated after three returns determined to be due to inauthentic or inaccurate listings of goods. Payment by the buyer for such a returned shoe will be refunded via the original method of payment. In limited cases, at the discretion of Kicktronics the returned shoe may be re-listed with corrected information using the Kicktronics marketplace at no charge, with the same terms and conditions, as described above. Excepting for the above, all sales are final and non-returnable."
    },
  ]
};
