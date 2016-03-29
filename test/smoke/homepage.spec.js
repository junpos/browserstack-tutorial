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

    it('should have social icons on desktop', function (done) {
      if (config.vp.isMobile) {
        return done();
      }

      driver.findElements(By.css('header .header-social .social-follow-item a'))
      .then(function (elements) {
        expect(elements).to.have.length(5);

        var hrefs = elements.map(function (element) {
          return element.getAttribute('href');
        });

        return webdriver.promise.all(hrefs);
      })
      .then(function (hrefs) {
        expect(hrefs).to.eql([
          'https://www.facebook.com/architecturaldigest',
          'https://twitter.com/ArchDigest/',
          'https://www.pinterest.com/archdigest/',
          'https://instagram.com/archdigest/',
          'https://plus.google.com/+Archdigest/'
        ]);
        done();
      })
      .thenCatch(done);
    });

    it('should have a logo that hyperlinks to homepage', function (done) {
      driver.findElement(By.css('.component-logo a'))
      .then(function (element) {
        expect(element).to.exist;
        return element.getAttribute('href');
      })
      .then(function (href) {
        expect(href).to.equal(buildUrl('/'));
        done();
      })
      .thenCatch(done);
    });

    it('should have a link to the subscription page', function (done) {
      driver.findElement(By.css('header .drawer-content .secondary-nav a.component-link'))
      .then(function (element) {
        return element.getAttribute('href');
      })
      .then(function (href) {
        var link = config.vp.isMobile ? 'go/mobilefailsafe' : 'go/failsafe';
        expect(href).to.contain(buildUrl('/') + link);
        done();
      })
      .thenCatch(done);
    });
  });


});
