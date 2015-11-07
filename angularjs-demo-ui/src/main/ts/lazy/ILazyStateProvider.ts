import "angular";
import "angular-ui-router";

export interface ILazyState extends angular.ui.IState {
    module?: string
}

export interface ILazyStateProvider extends angular.ui.IStateProvider {
    lazyState(name: string, config: ILazyState): ILazyStateProvider;
}
