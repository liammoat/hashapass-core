var sha1 = require('./sha1');

module.exports.generate = function (parameter, master, opts) {
  opts = opts || {};
  return sha1.b64_hmac_sha1(master, parameter).substr(0, opts.len || 8);
};