import "angular";

import app from "./app";

console.timeEnd("APP_BOOT_LOADING_TIME");
angular.element(document).ready(() => {
  angular.bootstrap(document, [app.name], {
      strictDi: true
  });
});
