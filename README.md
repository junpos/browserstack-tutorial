### Interacting with the page and making assertions

```js
  describe('HEADER', function () {

    it('should have a logo that hyperlinks to homepage', function () {
      // use driver.findElement() to locate the first matching element
      return driver.findElement(By.css('.component-logo a'))
        .then(function (element) {
          expect(element).to.exist;
          // element.getAttribute->Promise<string> gets an attribute value
          return element.getAttribute('href');
        })
        .then(function (href) {
          expect(href).to.equal(buildUrl('/'));
        });
    });

    it('should have social icons on desktop', function () {
      if (vp.isMobile) {  // This isn't true for mobile breakpoints
        return this.skip();
      }

      // Use findElements to get an array of elements matching a selector
      return driver.findElements(By.css('header .header-social .social-follow-item a'))
        .then(function (elements) {
          expect(elements).to.have.length(5);

          // Gotta love promises!
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
        });
    });

    it('should show the gutter when the hamburger is clicked and contains nav items', function () {
      /**
       * driver.findElement returns a WebElementPromise which lets us chain
       * methods from WebElement that also return promises, like .click()
       * which does exactly what it sounds like.
       */
      return driver.findElement(By.css('.header .component-toggle')).click()
        .then(function () {
          // This isn't ideal, but we're waiting for an animation to complete.
          // Because we're not (usually) running inside the DOM, we can't
          // do things like add an event listener to 'transitionend'.
          return driver.sleep(500);
        })
        .then(function () {
          // Since getAttribute also returns a Promise, we can chain it on findElement
          return driver.findElement(By.css('.drawer-wrapper')).getAttribute('class');
        })
        .then(function (className) {
          // We can also restructure this slightly to test that the element is visible
          // with element.isDisplayed()->Promise<boolean>
          expect(className).to.contain('open');
         // Should this be two test cases?
          return driver.findElements(By.css('nav.drawer-nav div.nav-item > a'));
        })
        .then(function (elements) {
          expect(elements).to.have.length(6);
          var hrefs = elements.map(function (element) {
            return element.getAttribute('href');
          });
          return webdriver.promise.all(hrefs);
        })
        .then(function (hrefs) {
          // Assert the targets and the order of the
          var rootUrl = buildUrl('/');
          expect(hrefs).to.eql([
            rootUrl + 'architecture-design',
            rootUrl + 'decorating-renovation',
            rootUrl + 'celebrity-style',
            rootUrl + 'culture-lifestyle',
            rootUrl + 'shopping',
            rootUrl + 'ad100'
          ]);
        });
    });

```

There are a bunch of useful methods on WebElement objects, including but not limited to

- clear
- click
- getAttribute
- getCssValue
- getId
- getInnerHtml
- getLocation
- getOuterHtml
- getTagName
- getText
- isDisplayed
- isElementPresent
- sendKeys
- submit


1. http://selenium.googlecode.com/git/docs/api/javascript/class_webdriver_WebElement.html
2. http://selenium.googlecode.com/git/docs/api/javascript/namespace_webdriver_By.html

### Checkout this branch
```shell
$ git checkout -b 04-real-test-for-header origin/04-real-test-for-header
```
