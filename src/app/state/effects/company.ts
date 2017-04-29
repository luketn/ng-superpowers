import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';

import * as company from '../actions/company';
import { Company } from '../models/company';
import { Http } from '@angular/http';

@Injectable()
export class CompanyEffects {
    private url = 'https://firebootcamp-crm-api.azurewebsites.net/api/company';

    @Effect()
    loadCompanies$: Observable<Action> = this.actions$
        .ofType(company.LOAD_COMPANIES)
        .switchMap(() =>
            this.http.get(this.url)
                .map(response => response.json())
                .map(companies => new company.LoadCompaniesSuccessAction(companies))
                .catch(error => of(new company.LoadCompaniesFailAction(error.status + ': ' + error.statusText)))
        );

    constructor(private actions$: Actions, private http: Http) { }
}
