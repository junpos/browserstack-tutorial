'use strict';

var env = process.env;

exports.capabilities = {
  'browserName': env.WD_BROWSER || 'firefox',
  'browserstack.user': env.WD_BROWSERSTACK_USER || 'USERNAME',
  'browserstack.key': env.WD_BROWSERSTACK_KEY || 'KEY',
  'resolution': '1280x1024'
};

exports.device = env.WD_DEVICE || 'desktop';

var vpConfig = {
  viewportSizes: {
    xs: 400,
    sm: 768,
    md: 1024,
    lg: 1025,
    xl: 1280,
    xxl: 1600
  },
  deviceDefaults: {
    mobile: 'xs',
    tablet: 'sm',
    desktop: 'xl'
  }
};

exports.vp = {
  isMobile: exports.device === 'mobile',
  isDesktop: exports.device === 'desktop',
  width: vpConfig.viewportSizes[vpConfig.deviceDefaults[exports.device]]
};

exports.seleniumHub = env.WD_HUB || 'http://hub.browserstack.com/wd/hub';

var envConfigs = {
  local: {
    host: 'localhost:8000'
  },
  ci: {
    host: 'ap-ci.architecturaldigest.com'
  },
  stag: {
    host: 'ap-stag.architecturaldigest.com'
  }
};

exports.env = envConfigs[env.WD_ENV || 'stag'];

if (!exports.env) {
  throw new Error('Invalid WD_ENV! Use one of ' + Object.keys(envConfigs).join(','));
}
