### Config setup

- [Capabilities](https://www.browserstack.com/automate/capabilities) are a series of key-value pairs that allow customization of testing from within BrowserStack Automate.
```js
  exports.capabilities = {
    'browserName': env.WD_BROWSER || 'firefox',
    'browserstack.user': env.WD_BROWSERSTACK_USER || 'YOUR USERNAME',
    'browserstack.key': env.WD_BROWSERSTACK_KEY || 'YOUR KEY',
    'resolution': '1280x1024'
  };
```
- [Viewport] (http://www.quirksmode.org/mobile/viewports.html) is the user's visible area of a web browser.
```js
  exports.vp = {
    isMobile: exports.device === 'mobile',
    isDesktop: exports.device === 'desktop',
    width: vpConfig.viewportSizes[vpConfig.deviceDefaults[exports.device]]
  };
```

- Environment
```javascript
  local: {
    host: 'localhost:8000'
  },
  ci: {
    host: 'ap-ci.architecturaldigest.com'
  },
  stag: {
    host: 'ap-stag.architecturaldigest.com'
  }
```

### Smoketest Environment Variables

Use these to control the behavior of the smoketests:

<table>
  <tr>
    <th>Var</th>
    <th>Description</th>
    <th>Values</th>
    <th>Default</th>
  </tr>
  <tr>
    <td><code>WD_ENV</code></td>
    <td>Which env to run tests against</td>
    <td>stag,ci,local</td>
    <td>stag</td>
  </tr>
  <tr>
    <td><code>WD_BROWSER</code></td>
    <td>Which browser to use</td>
    <td><a href="https://www.browserstack.com/automate/capabilities">see <code>browserName</code></a></td>
    <td>firefox</td>
  </tr>
  <tr>
    <td><code>WD_DEVICE</code></td>
    <td>Which viewport size to use</td>
    <td>desktop,tablet,mobile</td>
    <td>desktop</td>
  </tr>
  <tr>
    <td><code>WD_HUB</code></td>
    <td>Which Selenium Hub to use</td>
    <td><code>URL</code></td>
    <td>
      <code>http://hub.browserstack.com/wd/hub
    <small>[http://127.0.0.1:4444/wd/hub]</small>
   </code>
    </td>
  </tr>
  <tr>
    <td><code>WD_BROWSERSTACK_USER</code></td>
    <td>Override the browserstack username</td>
    <td></td>
    <td>see code</td>
  </tr>
  <tr>
    <td><code>WD_BROWSERSTACK_KEY</code></td>
    <td>Override the browserstack key</td>
    <td></td>
    <td>see code</td>
  </tr>
</table>

### Checkout this branch
```shell
$ git checkout -b 02-config origin/02-config
```
