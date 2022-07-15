# Heroku - React - Node.js
Deploy a react app with node on heroku.
```
heroku open```


```
"scripts": {
    "start": "node server/index.js",
    "build": "cd client && npm install && npm run build"
  },
```
> ```node -v```
```
"engines": {
  "node": "your-node-version"
}
```

```
git push heroku HEAD:master
```
