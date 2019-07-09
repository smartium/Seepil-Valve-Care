/* globals App */
/* eslint-disable quote-props */

RESOURCES_PATH = 'public/mobile_config/resources/';

App.info({
  name: 'Valve Care',
  description: 'SEEPIL Valve Care',
  author: 'SMARTIUM',
  email: 'developer@smartium.app',
  website: 'https://www.seepilvalvecare.com.br',
  version: '0.0.1',
});

App.icons({
  // iOS
  'iphone_2x': RESOURCES_PATH + 'icons/icon.png',
  'ipad': RESOURCES_PATH + 'icons/icon.png',
  'ipad_2x': RESOURCES_PATH + 'icons/icon.png',

  // Android
  'android_mdpi': RESOURCES_PATH + 'icons/icon.png',
  'android_hdpi': RESOURCES_PATH + 'icons/icon.png',
  'android_xhdpi': RESOURCES_PATH + 'icons/icon.png',
  'android_xxhdpi': RESOURCES_PATH + 'icons/icon.png',
  'android_xxxhdpi': RESOURCES_PATH + 'icons/icon.png',
});

App.launchScreens({
  // iOS
  'iphone_2x': RESOURCES_PATH + 'splash/splash-320x480@2x.png',
  'iphone5': RESOURCES_PATH + 'splash/splash-320x568@2x.png',
  'ipad_portrait': RESOURCES_PATH + 'splash/splash-768x1024.png',
  'ipad_portrait_2x': RESOURCES_PATH + 'splash/splash-768x1024@2x.png',
  'ipad_landscape': RESOURCES_PATH + 'splash/splash-1024x768.png',
  'ipad_landscape_2x': RESOURCES_PATH + 'splash/splash-1024x768@2x.png',

  // Android
  'android_mdpi_portrait': RESOURCES_PATH + 'splash/smartium_splash@1440.png',
  'android_mdpi_landscape': RESOURCES_PATH + 'splash/splash-480x320.png',
  'android_hdpi_portrait': RESOURCES_PATH + 'splash/smartium_splash@1440.png',
  'android_hdpi_landscape': RESOURCES_PATH + 'splash/smartium_splash@2560.png',
  'android_xhdpi_portrait': RESOURCES_PATH + 'splash/smartium_splash@1440.png',
  'android_xhdpi_landscape': RESOURCES_PATH + 'splash/smartium_splash@2560.png',
  'android_xxhdpi_portrait': RESOURCES_PATH + 'splash/smartium_splash@1440.png',
  'android_xxxhdpi_portrait': RESOURCES_PATH + 'splash/smartium_splash@1440.png',
  'android_xxhdpi_landscape': RESOURCES_PATH + 'splash/smartium_splash@2560.png',
  'android_xxxhdpi_landscape': RESOURCES_PATH + 'splash/smartium_splash@2560.png',
});

App.setPreference('StatusBarOverlaysWebView', 'false');
App.setPreference('StatusBarBackgroundColor', '#000000');
