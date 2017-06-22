let path = require('path');
const BASE_DIR = __dirname;
const SRC_DIR = path.resolve(BASE_DIR + '/../../src/js');
var Module = require('module');
Module.prototype.require = new Proxy(Module.prototype.require, {
    apply(target, thisArg, argumentsList){
        let name = argumentsList[0];
        let isLocal = thisArg.filename.startsWith(BASE_DIR) &&
            name.startsWith('./');
        if (isLocal) {
            let testFileDir = path.dirname(thisArg.filename)
            let testPath = testFileDir.replace(BASE_DIR, '');
            let srcPath = SRC_DIR + testPath;
            let relativePath = path.relative(testFileDir, srcPath);
            argumentsList[0] = relativePath + '/' + name;
        }
        return Reflect.apply(target, thisArg, argumentsList)
    }
});
