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

  if (s) {

    var slashIndex = helpers.inspectSlashes(s);

    var safe = ((slashIndex.indexOf('0') != -1) || (slashIndex.indexOf(s.length.toString()) != -1)) ? true : false;

  }

  if (callback) {
    return callback(safe);
  } else {
    return safe;
  }

};

module.exports = helpers;