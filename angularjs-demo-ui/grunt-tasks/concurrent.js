module.exports = function (grunt, options) {
  return {
    lints: [ 'tslint', 'scsslint' ],
    compile: [ 'typescript', 'concat:vendor', 'compass' ]
  };
};
