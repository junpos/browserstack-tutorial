# Browserstack-tutorial



### Requirement
- [NPM](https://docs.npmjs.com/getting-started/what-is-npm) is a NodeJS package manager. As its name would imply, you can use it to install node programs. Installation document is [here](https://docs.npmjs.com/getting-started/installing-node).
- [Mocha](https://www.npmjs.com/package/mocha) and [Chai](https://www.npmjs.com/package/chai) for setting up the actual tests and making assertions.
- [WebDriver](https://www.w3.org/TR/webdriver/) is a standard API browsers expose to enable remote control—e.g. an API to say things like "load this page, then find this element, then click on it, then wait, then find this element, then read the contents."
- [Selenium Webdriver Node API](http://selenium.googlecode.com/git/docs/api/javascript/index.html), a Promise-oriented Selenium client (we install it via [browserstack-webdriver](https://www.npmjs.com/package/browserstack-webdriver)).

### Installation

Install dependencies
```shell
$ npm install
```


### Running Tests
on Browserstack.com
```shell
$ npm run test:browserstack
```
Locally
```shell
$ cd ./test/smoke #locate the standalone selenium server JAR file
$ java -jar selenium-server-standalone-2.51.0.jar #run standalone selenium server locally

# switch to new terminal
$ WD_HUB=http://127.0.0.1:4444/wd/hub npm run test:browserstack
```

### Test Result Example
```shell
> selenium@1.0.0 test:browserstack /Users/jkim31/Documents/tutorial/browserstack
> mocha test/smoke/*.spec.js



  Homepage
    [Header]
      ✓ should have social icons on desktop
      ✓ should have a logo that hyperlinks to homepage
      ✓ should have a link to the subscription page


  3 passing (12s)
```
