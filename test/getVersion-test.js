var getVersion = process.env.CLIPARSE_COV
  ? require('../lib-cov/getVersion')
  : require('../lib/getVersion');
var pkg = require('../package.json');

exports.getVersion = {
  setUp: function testSetup(done) {
    done();
  },
  'Returns correct version': function testVersion(test) {
    test.equal(pkg.version, getVersion());
    test.done();
  }
};
