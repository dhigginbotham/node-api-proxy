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

  var i, slashes, ln;

  if (s) {

    ln = s.length;
    slashes = [];
    i = 0;


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

helpers.motherEffingSlashNuke = function (string, fn) {

  var s = string || null;
  var callback = ((typeof fn != 'undefined') && (typeof fn == 'function')) ? fn : null;

  var sanitized, slashIndex;

  if (s) {

    slashIndex = helpers.inspectSlashes(s);

    var frontSlash = (slashIndex.indexOf('0') > -1 ) ? true : false;

    sanitized = (frontSlash) ? s.substring(1, s.length) : s;

    var trailingSlash = (sanitized[sanitized.length - 1] == '/') ? true : false;

    sanitized = (trailingSlash) ? sanitized.substring(0, (sanitized.length - 1)) : sanitized;

  }

  if (callback) {
    return callback(sanitized);
  } else {
    return sanitized;
  }

};

module.exports = helpers;