# micro-cluster

Run multiple `micro` servers and a front proxy at a time, with a simple configuration file.

## Example

Create a json file like the following.

```json
{
  "/path-to-serve": {
    "path": "index.js",
    "env": { "NODE_ENV": "production" }
  },
  "/woot": "woot.js"
}
```

Run servers.

```bash
$ micro-cluster -p 3000 app.json
```

