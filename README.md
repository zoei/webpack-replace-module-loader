# webpack-replace-module-loader    
Replace file *[name].[ext]* with *[name].[key].[ext]*;

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
            include: [path.join(__dirname, 'src')], 
            query: { key: process.env.BUILD_ENV }
        }]
    }

#### Build with webpack
```js
$ BUILD_ENV=production webpack
```
##### This will replace src/config.json with src/config.production.json
# Query
***

- key   
    -
    The value add to the file name.
    The replace file is [name].[key].[ext]