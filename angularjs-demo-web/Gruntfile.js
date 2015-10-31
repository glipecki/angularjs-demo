module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-config')(grunt, {
    configPath: require('path').join(process.cwd(), 'grunt-tasks'),
    jitGrunt: {
      staticMappings: {
        typescript: 'grunt-ts',
        configureProxies: 'grunt-connect-proxy'
      }
    }
  });
}
