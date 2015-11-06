# How to run grunt

on Windows
PS> node ./node_modules/grunt-cli/bin/grunt --version

on Linux/Mac
$ ./grunt --version
or
$ export PATH=$PATH:.
$ grunt --version

# tsd
PS> node ./node_modules/tsd/build/cli.js

# TODO
- emit source map and ts files only for devmode (skip in production)
- use full js files only in devmode (minified in production)
- use full css files only in devmode (minified in production)
- maven assebmly

- cleaning in task aliases
- logging
- karma watch task

- functional tests ?
-- build
--- build app (jar/war with webapp-ui)
--- run with functionalTests profile
--- run protractor against :8080
--- ?
-- devmode
--- build app (jar/war)
--- run devmode
--- run protractor against :9000

# Licese analysis:
## node
$ npm install nlf
$ node node_modules/nlf/bin/nlf-cli.js
## bower
$ npm install bower-license
$ node node_modules/bower-license/bin/bower-license

# angular tricks
angular.element(document).injector().get("IAuthService").getCurrentUser();

# protractor
$ node_modules/protractor/bin/webdriver-manager update
$ node_modules/protractor/bin/protractor protractor.js
