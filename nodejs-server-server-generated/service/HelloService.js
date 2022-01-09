'use strict';


/**
 * ユーザに挨拶する。
 *
 * userName String ユーザ名
 * returns inline_response_200
 **/
exports.getHello = function(userName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "HelloUser" : "Hello, userName"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

