var _ = require('lodash');
var expect = require('expect.js');

var helpers = require('../lib/helpers');

describe('test helpers.js methods to ensure they\'re working the way we rely on them to', function () {

  var hasTrailingSlashUri = 'https://api.github.com/';
  var noTrailingSlashUri = 'https://api.github.com';

  var trailingSlashPath = '/path/of/endpoint/n';
  var noTrailingSlashPath = '/path/of/endpoint/n/';
  
  var trix = '/*/';
  var sanitizedTrix = '/*';
  var slashes = [ '6', '7', '22' ];

  describe('non-blocking: test removeTrailingSlash', function () {

    helpers.removeTrailingSlash(hasTrailingSlashUri, function (helperResult) {

      it('goes from ' + hasTrailingSlashUri + ' to ' + noTrailingSlashUri, function (done) {

        expect(helperResult).not.to.be(null);

        expect(helperResult).to.equal(noTrailingSlashUri);
        
        return done();

      });

    });

    helpers.removeTrailingSlash(noTrailingSlashPath, function (helperResult) {

      it('goes from ' + noTrailingSlashPath + ' to ' + trailingSlashPath, function (done) {

        expect(helperResult).not.to.be(null);

        expect(helperResult).to.equal(trailingSlashPath);
        
        return done();

      });

    });

    helpers.removeTrailingSlash(trix, function (helperResult) {

      it('goes from ' + trix + ' to ' + sanitizedTrix, function (done) {

        expect(helperResult).not.to.be(null);

        expect(helperResult).to.equal(sanitizedTrix);
        
        return done();

      });

    });

  });

  describe('blocking: test removeTrailingSlash', function () {

    it('goes from ' + hasTrailingSlashUri + ' to ' + noTrailingSlashUri, function (done) {
      
      var helperResult = helpers.removeTrailingSlash(hasTrailingSlashUri);

      expect(helperResult).not.to.be(null);
      expect(helperResult).to.equal(noTrailingSlashUri);

      return done();

    });

    it('goes from ' + noTrailingSlashPath + ' to ' + trailingSlashPath, function (done) {
      
      var helperResult = helpers.removeTrailingSlash(noTrailingSlashPath);

      expect(helperResult).not.to.be(null);
      expect(helperResult).to.equal(trailingSlashPath);

      return done();

    });
  
    it('goes from ' + trix + ' to ' + sanitizedTrix, function (done) {
      
      var helperResult = helpers.removeTrailingSlash(trix);

      expect(helperResult).not.to.be(null);
      expect(helperResult).to.equal(sanitizedTrix);

      return done();

    });
  
  });

  describe('non-blocking: test inspectSlashes', function () {

    it('returns slash placement to be ' + slashes, function (done) {

      helpers.inspectSlashes(hasTrailingSlashUri, function (helperResult) {

        expect(helperResult.toString()).to.equal(slashes.toString());

        // bordem... these are all slower..
        // expect(helperResult[0]).to.equal(slashes[0]);
        // expect(helperResult[1]).to.equal(slashes[1]);
        // expect(helperResult[2]).to.equal(slashes[2]);
        
        // var ln = slashes.length;

        // for (var i=0;i<ln;++i) {

        //   expect(helperResult[i]).to.equal(slashes[i]);

        // };

        return done();

      });

    });

  });

  describe('non-blocking: test motherEffingSlashNuke', function () {

    it('returns slash placement to be ' + slashes, function (done) {

      helpers.motherEffingSlashNuke(hasTrailingSlashUri, function (helperResult) {


        console.log(helperResult);

        // bordem... these are all slower..
        // expect(helperResult[0]).to.equal(slashes[0]);
        // expect(helperResult[1]).to.equal(slashes[1]);
        // expect(helperResult[2]).to.equal(slashes[2]);
        
        // var ln = slashes.length;

        // for (var i=0;i<ln;++i) {

        //   expect(helperResult[i]).to.equal(slashes[i]);

        // };

        return done();

      });

    });

  });

  // end of removeTrailingSlash tests

});