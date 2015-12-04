/**
 * Created by Codi Marker on 12/3/15.
 */

var fs = require("fs");
exports.init = function(name) {
    try {
        var data = fs.readFileSync(process.cwd() +'/store/'+ name + '.json');
        return JSON.parse(data);
    }
    catch (e) {
        return {};
    }
};

exports.save = function(name, data) {
    if (!fs.existsSync(process.cwd() +'/store/')){
        fs.mkdirSync(process.cwd() +'/store/');
    }

    fs.writeFileSync(process.cwd() +'/store/'+ name + '.json', JSON.stringify(data));
};