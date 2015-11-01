import * as angular from "angular";
import app from "./app";

console.info("Bootstrapig app");

angular.element(document).ready(function() {
  angular.bootstrap(document, [app.name]);
});
