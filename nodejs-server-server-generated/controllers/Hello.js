'use strict';

var utils = require('../utils/writer.js');
var Hello = require('../service/HelloService');

module.exports.getHello = function getHello (req, res, next, userName) {
  Hello.getHello(userName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
