import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';
import { Injectable } from '@angular/core';
import { EngineService } from './engine.service';
import { AlertService } from '../../../node_modules/ngx-alerts';
import { NgxSpinnerService } from '../../../node_modules/ngx-spinner';



@Injectable()
export class MasterAuthGuard implements CanActivate {
    status: boolean;
    constructor(
        private engineService: EngineService,
        private router: Router,
        private alertService: AlertService,
        private spinner: NgxSpinnerService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.spinner.show();
        this.status = this.engineService.isMasterAuthenticated();
        if (this.status === true) {
            this.spinner.hide();
            return true;
        } else {
            // console.log(route.url);
            this.alertService.warning('You are not authorizes to view masters!');
            this.spinner.hide();
            return false;
        }
    }
}
