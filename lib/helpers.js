var helpers = {};

helpers.removeTrailingSlash = function (string, fn) {

  var s = string || null;

  var callback = ((typeof fn != 'undefined') && (typeof fn == 'function')) ? fn : null;

  var sanitized, hasTrailingSlash, ln;

  if (s) {

    ln = s.length;

    hasTrailingSlash = (s[ln - 1] == '/') ? true : false;

    if (hasTrailingSlash) {

      sanitized = s.substring(0, (ln - 1));

    };

  };

  if (callback) {
    return callback(sanitized);
  } else {
    return sanitized;
  }

};

helpers.inspectSlashes = function (string, fn) {

  var s = string || null;

  var callback = ((typeof fn != 'undefined') && (typeof fn == 'function')) ? fn : null;

  var hasTrailingSlash, ln;

  if (s) {

    ln = s.length;

    var i = 0;
    var slashes = [];

    while (ln--) {

      if (s[i] == '/') {

        slashes.push(i + '');

      };

      ++i;

    };

  };

  if (callback) {
    return callback(slashes);
  } else {
    return slashes;
  }

};

module.exports = helpers;