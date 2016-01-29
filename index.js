var path = require('path'),
    loaderUtils = require("loader-utils");

module.exports = function(source) {
    this.cacheable && this.cacheable();

    var resourcePath = this.resourcePath,
        parsedPath = path.parse(resourcePath),
        query = loaderUtils.parseQuery(this.query),
        key = query.key ? '.' + query.key : '',
        newFilePath = path.resolve(parsedPath.dir, parsedPath.name + key + parsedPath.ext);

    try {
        return require(newFilePath);
    } catch (e) {
        return source;
    }
};