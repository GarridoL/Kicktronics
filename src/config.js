let PRODUCTION_BACKEND_URL = 'https://api.payhiram.ph/public/increment/v1'
let SANDBOX_BACKEND_URL = 'https://api.payhiram.ph/public/increment/v1'
let DEV_BACKEND_URL = 'http://192.168.254.105/payhirambe/public/increment/v1'
let BACKEND_URL = null
switch(1){
  case 0:{
    BACKEND_URL = DEV_BACKEND_URL
  }
  break
  case 1:{
    BACKEND_URL = SANDBOX_BACKEND_URL
  }
  break
  case 2:{
    BACKEND_URL = PRODUCTION_BACKEND_URL
  }
  break
}
export default{
  IS_DEV: BACKEND_URL,
  BACKEND_URL: BACKEND_URL,
  TEST: true,
  GOOGLE: {
    API_KEY: 'AIzaSyAxT8ShiwiI7AUlmRdmDp5Wg_QtaGMpTjg'
  },
  PUSHER: {
    appId: 'your_pusher_id',
    key: 'your_pusher_key',
    secret: 'your_pusher_secret',
    cluster: 'ap1',
    encrypted: true
  }
}