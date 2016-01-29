# webpack-replace-module-loader
A webpack loader to replace module.

# Installation
***
```sh
$ npm install webpack-replace-module-loader --save-dev
```
# Usage
***

#### Config jsons
- src/config.json     
- src/config.test.json    
- src/config.production.json  

#### Config in webapck.config.js
    
    module: {
        loaders: [{
            test: [/config\.json$/],   
            loader: 'webpack-replace-module-loader', 
            include: [path.join(__dirname, 'src/config.json')], 
            query: { key: process.env.BUILD_ENV }
        }]
    }

#### Build with webpack
```js
$ BUILD_ENV=production webpack
```
##### This will package src/config.production.json into bundle file
# Query
***

- key   
    -
    The value add to the file name.