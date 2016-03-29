'use strict';

var expect = require('chai').expect;
var webdriver = require('browserstack-webdriver');
var By = webdriver.By;
var helper = require('./helper');
var buildDriver = helper.buildDriver;
var buildUrl = helper.buildUrl;
var config = require('./config');

var PAGE_URL = buildUrl('/');

describe('Homepage', function () {
  this.timeout(40000);
  this.slow(1000);

  var driver;
  var homepage;
  var w;

  before(function (done) {
    driver = this.driver = buildDriver({
      project: 'Homepage',
      name: 'ad-homepage-test'
    });

    w = new webdriver.WebDriver.Window(driver);
    return w.setSize(config.vp.width, 800)
    .then(function () {
      return driver.get(PAGE_URL);
    })
    .then(function () {
      setTimeout(done, 5000);  // To let ads, etc, load.
    })
    .thenCatch(done);
  });

  after(function () {
    return driver.quit();
  });

  beforeEach(function () {
    return driver.switchTo().defaultContent();
  });


  describe('[Header]', function () {

    it('should always pass', function () {
      return expect(true).to.be.true;
    });

  });


});
