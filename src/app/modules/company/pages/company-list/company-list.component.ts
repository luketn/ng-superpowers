import { Component, OnInit, EventEmitter } from '@angular/core';
import { Company } from 'app/state/models/company';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppState, CompanyState } from 'app/state/app.state';
import { RemoveCompanyAction, LoadCompaniesAction, AddCompanyAction } from 'app/state/actions/company';
import * as Materialize from 'angular2-materialize';

@Component({
  selector: 'ngsp-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  companies$: Observable<CompanyState>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.companies$ = this.store.select('companies');
    this.loadCompanies();
    this.toastErrors();
  }

  refresh() {
    this.loadCompanies();
  }

  add() {
    this.store.dispatch(new AddCompanyAction());
  }

  loadCompanies() {
    this.store.dispatch(new LoadCompaniesAction());
  }

  toastErrors() {
    this.companies$.subscribe((companies) => {
      if (companies.error) {
        Materialize.toast(`An error occurred: ${companies.error}`, 3000, 'error-toast');
      }
    });
  }

  deleteCompany(companyId: number) {
    this.store.dispatch(new RemoveCompanyAction(companyId));
  }
}
