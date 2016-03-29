### Before and After Suite execution hook

```js
describe('AD homepage', function () {
  this.timeout(0);  // Disable timeouts
  this.slow(1000);

  var driver;
  var w;

  before(function (done) {
    driver = buildDriver({
      project: 'AD Homepage',
      name: 'ad-homepage-test'
    });  // The WebDriver object[1]

    w = new webdriver.WebDriver.Window(driver);  // Reference to the browser window [2]
    w.setSize(vp.width, 800)
    .then(function () {
      return driver.get(buildUrl('/'));  // Navigate to the page
    })
    .then(function () {
      setTimeout(done, 2000);  // Let ads, CM interstitials, etc, load.
    })
    .thenCatch(done);
  });

  beforeEach(function () {
    // Make sure we haven't switched[3] into an iframe.
    return driver.switchTo().defaultContent();
  });
```

1. http://selenium.googlecode.com/git/docs/api/javascript/module_selenium-webdriver_class_WebDriver.html
2. http://selenium.googlecode.com/git/docs/api/javascript/class_webdriver_WebDriver_Window.html
3. http://selenium.googlecode.com/git/docs/api/javascript/module_selenium-webdriver_class_WebDriver.html#switchTo



### Checkout this branch
```shell
$ git checkout -b 03-first-test-suite origin/03-first-test-suite
```
