import "angular";

import app from "./asyncApp";

console.timeEnd("APP_BOOT_LOADING_TIME");
console.time("APP_BOOT_INITIALIZING_TIME");
angular.element(document).ready(() => {
    angular.bootstrap(document, [app.name], {
        strictDi: true
    });
});
