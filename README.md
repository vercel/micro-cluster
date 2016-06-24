# micro-cluster

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
      proxy: 'myService'
    }
    '^/woot/?$': 'woot'
  }
}
```

Run servers.

```bash
$ micro-cluster -p 3000 app.js
```

