'use strict';

var _ = require('lodash');
var url = require('url');
var qs = require('querystring');
var webdriver = require('browserstack-webdriver');
var By = webdriver.By;
var config = require('./config');

exports.buildUrl = function (pathname, queryParams) {
  return url.format({
    protocol: 'http',
    host: config.env.host,
    pathname: pathname,
    search: queryParams ? qs.stringify(queryParams) : null
  });
};

exports.buildDriver = function (options) {
  _.defaults(options || {}, config.capabilities);
  return new webdriver.Builder()
    .usingServer(config.seleniumHub)
    .withCapabilities(options)
    .build();
};
