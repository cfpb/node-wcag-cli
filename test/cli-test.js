var exec = require('child_process').execFileSync;
var getHelpText = require('../lib/getHelptext');
var getVersion = require('../lib/getVersion');

exports.cli = {
  setUp: function testSetup(done) {
    done();
  },
  'Returns helptext with flag -h': function testHelpWithH(test) {
    var helpText = exec('./cli.js', ['-h']).toString().trim();
    test.equal(helpText, getHelpText());
    test.done();
  },
  'Returns helptext with flag --help': function testHelpWithHelp(test) {
    var helpText = exec('./cli.js', ['-h']).toString().trim();
    test.equal(helpText, getHelpText());
    test.done();
  },
  'Returns version with flag -v': function testVersionWithV(test) {
    var versionText = exec('./cli.js', ['-v']).toString().trim();
    test.equal(versionText, getVersion());
    test.done();
  },
  'Returns version with flag --version': function testVersionWithVersion(test) {
    var versionText = exec('./cli.js', ['--version']).toString().trim();
    test.equal(versionText, getVersion());
    test.done();
  }
};