
### Installing Selenium Locally

BrowserStack is great, but 1) we have a finite number of "minutes" we can run each month and 2) it's a little slow for rapid feedback while writing tests. Fortunately, it's pretty easy to get Selenium running locally.

1.  Get Java (latest is best, but definitely >6/1.6):

        $ brew install Caskroom/cask/java

1.  Download the [**Selenium Standalone Server**](http://www.seleniumhq.org/download/)
1.  Download the drivers and put them somewhere on your `PATH`:
  1.  [chrome driver](http://chromedriver.storage.googleapis.com/index.html)
  2.  [SafariDriver.safariextz](http://selenium-release.storage.googleapis.com/index.html?path=2.45/)
  3.  IE, Edge, and Opera drivers exist, if you google "$browser driver webdriver"
1.  Run the local server:

        $ java -jar selenium-server-standalone-2.47.0.jar

Now the local selenium server should be running and listening on port 4444, and the main API endpoint is always `/wd/hub`.

You can specify the local server with the `WD_HUB` environment variable:

    $ WD_HUB=http://127.0.0.1:4444/wd/hub npm run test:browserstack

You should see a browser pop up, run through several steps, then quit, as the test output appears in the console.


### Checkout this branch
```shell
$ git checkout -b 05-local-testing origin/05-local-testing
```
