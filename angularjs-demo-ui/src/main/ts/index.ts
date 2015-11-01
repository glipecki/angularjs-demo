import * as angular from "angular";
import app from "./app";

console.timeEnd('APP_BOOT_SYSTEMJS_TIME');

angular.element(document).ready(function() {
  angular.bootstrap(document, [app.name]);
});
