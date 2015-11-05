export let initOnLink = (scope : any, elem : any, attr : any, ctrl : any) => {
    if (ctrl !== undefined && typeof ctrl.init === "function") {
        ctrl.init();
    }
};
