# micro-cluster

---

**DEPRECATED:** Please use [micro-proxy](https://github.com/zeit/micro-proxy) instead. This repo right here is not maintained anymore.

---

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![Slack Channel](http://zeit-slackin.now.sh/badge.svg)](https://zeit.chat/)

Run multiple `micro` servers and a front proxy at a time, with a simple configuration file.

## Example

Create a config file like the following.

```js
export default {
  services: {
    myService: {
      path: 'index.js',
      env: { NODE_ENV: 'production' }
    },
    woot: 'woot.js'
  },

  locations: {
    '^/path-regex/to/serve/?$': {
      rewrite: ['^(.*)$', '$1/rewritten'],
      proxySetHeaders: { 'X-CUSTOM-HEADER': '1' },
      proxy: 'myService'
    }
    '^/woot/?$': 'woot'
  }
}
```

Run servers.

```bash
micro-cluster -p 3000 app.js
```
